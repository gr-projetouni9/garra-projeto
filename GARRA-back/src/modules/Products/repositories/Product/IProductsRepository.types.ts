import { ProductModel } from '@modules/Products/models/ProductModel'

type TCreate = (data: ProductModel) => Promise<ProductModel>

type TFindById = (id: ProductModel['id']) => Promise<ProductModel>

type TFindAll = () => Promise<ProductModel[]>

type TDelete = (id: ProductModel['id']) => Promise<void>

type TUpdate = (data: Partial<ProductModel>) => Promise<ProductModel>

interface IProductsRepository {
  update: TUpdate
  create: TCreate
  delete: TDelete
  findAll: TFindAll
  findById: TFindById
}

export type { IProductsRepository }
