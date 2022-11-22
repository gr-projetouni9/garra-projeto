import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'
import { RelationModel } from '@modules/Relations/models/RelationModel'
import { IRelationsRepository } from '@modules/Relations/repositories/Relation/IRelationsRepository.types'
import { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'

@injectable()
export class CreateRelationService {
  constructor(
    @inject('RelationsRepository')
    private relationsRepository: IRelationsRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository
  ) {}

  private subtractQuantity = async (id, repository, name) => {
    const value = await repository.findById(id)

    if (!value) throw new AppError(`${name} does not exist`)

    const newQuantity = value.quantity - 1

    if (newQuantity < 0) throw new AppError(`Not has enough ${name}s`)

    await repository.update({ id: value.id, quantity: newQuantity })
  }

  execute = async data => {
    await this.subtractQuantity(
      data.product_id,
      this.productsRepository,
      'product'
    )

    await this.subtractQuantity(
      data.request_id,
      this.requestsRepository,
      'request'
    )

    const newRelation = new RelationModel()

    Object.assign(newRelation, data)

    const createdRelation = await this.relationsRepository.create(newRelation)

    return { createdRelation: { ...createdRelation } }
  }
}
