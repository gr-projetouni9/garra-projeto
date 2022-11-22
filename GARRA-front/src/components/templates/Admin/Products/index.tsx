import { Button, Footer, Header, List, Style } from './styles'

import Info from './Info'

import { Search } from '@app/components/molecules/Search'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { IProduct } from '@app/types/api.types'

import { formatDate } from '@app/utils/date/format'

import { AdminContext } from '..'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const Products = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const adminContext = useContext(AdminContext)
  const [products, setProducts] = useState<IProduct[]>(adminContext.products)
  const user = useAppSelector(({ userStore }) => userStore.user)

  const onProductDeleteClick = async (req: any) => {
    if (user?.token) {
      await api.delete(`/products/${req.id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      adminContext.getProducts()
    }
  }

  const items = products.map(product => ({
    onCloseClick: () => {
      onProductDeleteClick(product)
    },
    header: [
      `${product.name} (${product.quantity})`,
      `${formatDate(product.created_at)}`,
      `${product.author?.full_name}`
    ],
    content: <Info key={product.id} data={product} />
  }))

  useEffect(() => {
    const showingProducts =
      search === ''
        ? adminContext.products
        : adminContext.products.filter(
            value =>
              value.name.toLowerCase().includes(search.toLowerCase()) ||
              formatDate(value.created_at)
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
              String(value.quantity).includes(search.toLowerCase()) ||
              String(value.barcode).includes(search.toLowerCase())
          )

    setProducts(showingProducts)
  }, [adminContext.products, search])

  return (
    <Style>
      <Header>
        <Search
          name='search'
          value={search}
          variant='secondary'
          placeholder='Pesquisar produtos'
          onChange={(e: any) => {
            setSearch(e.target.value)
          }}
        />
      </Header>

      <List variant='secondary' items={items} />

      <Footer>
        <Button
          type='button'
          onClick={() => {
            router.push('/admin/create-product')
          }}
        >
          Adicionar produto
        </Button>
      </Footer>
    </Style>
  )
}
export default Products
