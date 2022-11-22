import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'

@injectable()
export class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  execute = async dataToUpdate => {
    const product = await this.productsRepository.findById(dataToUpdate.id)

    if (!product) throw new AppError('Product not found', 404)

    const finalDataToUpdate = { ...dataToUpdate }

    const updatedProduct = await this.productsRepository.update(
      finalDataToUpdate
    )

    return { updatedProduct: { ...updatedProduct } }
  }
}
