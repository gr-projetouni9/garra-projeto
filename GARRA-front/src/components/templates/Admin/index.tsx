import { Header } from './styles'

import Products from './Products'
import Requests from './Requests'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { IProduct } from '@app/types/api.types'
import { TNextPageWithLayout } from '@app/types/next.types'

import Head from 'next/head'
import { createContext, useEffect, useState } from 'react'

export const AdminContext = createContext<{
  products: IProduct[]
  getProducts: () => void
}>({
  products: [],
  getProducts: () => {}
})

const Admin: TNextPageWithLayout = () => {
  const [showProducts, setShowProducts] = useState(true)

  const [products, setProducts] = useState<any[]>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const getProducts = async () => {
    if (user?.token) {
      const res = await api.get('/products', {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      const newProducts = []

      for (const product of res.data.products) {
        const resAuthor = await api.get(`/users/${product.created_by}`)

        newProducts.push({
          ...product,
          author: { full_name: resAuthor.data.user.full_name }
        })
      }

      setProducts(newProducts)
    }
  }

  useEffect(() => {
    getProducts()
  }, [user?.token])

  if (!user?.register || !user?.token) return <></>

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Header>
        <button type='button' onClick={() => setShowProducts(true)}>
          Produtos
        </button>

        <button type='button' onClick={() => setShowProducts(false)}>
          Pedidos
        </button>
      </Header>

      <AdminContext.Provider value={{ products, getProducts }}>
        {showProducts ? <Products /> : <Requests />}
      </AdminContext.Provider>
    </>
  )
}

export default Admin
