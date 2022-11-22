import { inject, injectable } from 'tsyringe'

import { ProductModel } from '@modules/Products/models/ProductModel'
import { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'

@injectable()
export class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  execute = async data => {
    const newProduct = new ProductModel()

    Object.assign(newProduct, { ...data })

    const createdProduct = await this.productsRepository.create(newProduct)

    return { createdProduct: { ...createdProduct } }
  }
}
