import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'

@injectable()
export class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  execute = async id => {
    const foundProduct = await this.productsRepository.findById(id)

    if (!foundProduct) throw new AppError('Product does not exist', 400)

    await this.productsRepository.delete(id)

    return {
      deletedProduct: { ...foundProduct }
    }
  }
}
