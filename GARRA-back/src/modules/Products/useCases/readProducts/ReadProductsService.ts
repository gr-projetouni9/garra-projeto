import { inject, injectable } from 'tsyringe'

import { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'

@injectable()
export class ReadProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  execute = async id => {
    if (id) {
      const product = await this.productsRepository.findById(id)

      return product ? { product: { ...product } } : undefined
    }

    const products = await this.productsRepository.findAll()

    return { products }
  }
}
