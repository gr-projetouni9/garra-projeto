import {
  Arrow,
  Header,
  Loupe,
  ProductData,
  ProductStyle,
  Products,
  Search,
  Style
} from './styles'

import { AdminContext } from '../..'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { IProduct } from '@app/types/api.types'

import { formatDate } from '@app/utils/date/format'

import { useContext, useEffect, useState } from 'react'

export interface IProductProps {
  css: any
  user: any
  data: IProduct
  requestId: string
  onRelationClick: (product_id: string) => void
}

const Product = ({ data, onRelationClick, ...props }: IProductProps) => (
  <ProductStyle {...props}>
    <ProductData>
      {data.name} ({data.quantity})
      <br />
      {/* 
        {
          data.place && data.sector ? (
            <>
              {data.place}, {data.sector}
              <br />
            </>
          ) : (
            ''
        )} 
        */}
    </ProductData>

    <button type='button' onClick={() => onRelationClick(data.id)}>
      Relacionar
    </button>
  </ProductStyle>
)

const ProductsInRequests = ({ request, getRequests }: any) => {
  const adminContext = useContext(AdminContext)
  const [showProducts, setShowProducts] = useState(false)
  const user = useAppSelector(({ userStore }) => userStore.user)

  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<IProduct[]>(adminContext.products)

  useEffect(() => {
    const showingProducts =
      search === ''
        ? adminContext.products
        : adminContext.products.filter(
            value =>
              value.name.toLowerCase().includes(search.toLowerCase()) ||
              String(value.quantity).includes(search.toLowerCase()) ||
              String(value.barcode).includes(search.toLowerCase())
          )

    setProducts(showingProducts)
  }, [adminContext.products, search])

  const onRelationClick = async (product_id: string) => {
    try {
      await api.post(
        '/relations',
        { product_id, request_id: request.id },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )

      getRequests()
      adminContext.getProducts()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Style>
      <Header>
        <button type='button' onClick={() => setShowProducts(prev => !prev)}>
          <Arrow />
        </button>

        <Search>
          <Loupe />

          <input
            type='text'
            name='search'
            value={search}
            placeholder='Pesquisar pedidos'
            onChange={(e: any) => {
              setSearch(e.target.value)
            }}
          />
        </Search>
      </Header>

      {showProducts && (
        <Products>
          {products.map(product => (
            <Product
              user={user}
              data={product}
              key={product.name}
              requestId={request.id}
              onRelationClick={onRelationClick}
              css={{ opacity: product.quantity === 0 ? 0.5 : 1 }}
            />
          ))}
        </Products>
      )}
    </Style>
  )
}

export default ProductsInRequests
