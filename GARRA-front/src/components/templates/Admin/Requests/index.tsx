/* eslint-disable react-hooks/exhaustive-deps */
import { Description, Header, List, Style } from './styles'

import ProductsInRequests from './ProductsInRequests'

import { Search } from '@app/components/molecules/Search'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { formatDate } from '@app/utils/date/format'

import { useEffect, useState } from 'react'

const Requests = () => {
  const [search, setSearch] = useState<any>('')
  const [requests, setRequests] = useState<any>([])
  const [showingRequests, setShowingRequests] = useState([])

  const user = useAppSelector(({ userStore }) => userStore.user)

  const getRequests = async () => {
    if (user?.token) {
      const res = await api.get('/requests', {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      const resRequests = []

      for (const req of res.data.requests) {
        const resAuthor = await api.get(`/users/${req.user_id}`)

        const author = resAuthor.data.user.full_name

        resRequests.push({ ...req, author })
      }

      setRequests(resRequests)
    }
  }

  const items = showingRequests.map((req: any) => ({
    lowOpacity: req.quantity <= 0,
    header: [formatDate(req.created_at), req.quantity, req.author],
    content: (
      <>
        <Description>{req.description}</Description>

        <ProductsInRequests request={req} getRequests={getRequests} />
      </>
    )
  }))

  useEffect(() => {
    getRequests()
  }, [user?.token])

  useEffect(() => {
    const filteredRequests =
      search === ''
        ? requests
        : requests.filter(
            (value: any) =>
              value.author.toLowerCase().includes(search.toLowerCase()) ||
              formatDate(value.created_at)
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
              value.description.toLowerCase().includes(search.toLowerCase()) ||
              String(value.quantity).includes(search.toLowerCase())
          )

    setShowingRequests(filteredRequests)
  }, [requests, search])

  return (
    <Style>
      <Header>
        <Search
          name='search'
          value={search}
          placeholder='Pesquisar pedidos'
          onChange={(e: any) => {
            setSearch(e.target.value)
          }}
        />
      </Header>

      <List items={items} />
    </Style>
  )
}

export default Requests
