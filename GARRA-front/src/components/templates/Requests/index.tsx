/* eslint-disable react-hooks/exhaustive-deps */
import { Description, Footer, Header, List, Style } from './styles'

import Button from '@app/components/atoms/Button'

import Modal from '@app/components/molecules/Modal'
import { IForwardModal } from '@app/components/molecules/Modal/types'
import { Search } from '@app/components/molecules/Search'

import { CreateRequest } from '@app/components/templates/Requests/CreateRequest'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { TNextPageWithLayout } from '@app/types/next.types'

import { formatDate } from '@app/utils/date/format'

import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const Requests: TNextPageWithLayout = () => {
  const ref = useRef<IForwardModal>(null)
  const [requests, setRequests] = useState<any[]>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const onReqDeleteClick = async (req: any) => {
    if (user?.token) {
      await api.delete(`/requests/${req.id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      setRequests(prev => prev.filter(prev => prev.id !== req.id))
    }
  }

  const items = requests.map(req => ({
    header: [formatDate(req.created_at)],
    onCloseClick: () => onReqDeleteClick(req),
    content: <Description>{req.description}</Description>
  }))

  const getRequests = async () => {
    if (user?.token) {
      const res = await api.get('/requests', {
        params: { user_id: user.id },
        headers: { Authorization: `Bearer ${user?.token}` }
      })

      setRequests(res.data.requests.reverse())
    }
  }

  useEffect(() => {
    getRequests()
  }, [])

  if (!user?.token) return <></>

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Modal ref={ref}>
        <CreateRequest
          onCloseClick={() => {
            ref.current?.triggerModal({ open: false })
            getRequests()
          }}
        />
      </Modal>

      <Style>
        <Header>
          <Search placeholder='Pesquisar pedido' />
        </Header>

        <List items={items} />

        <Footer>
          <Button
            type='button'
            onClick={() => {
              ref.current?.triggerModal({ open: true })
            }}
          >
            Novo Pedido
          </Button>
        </Footer>
      </Style>
    </>
  )
}

export default Requests
