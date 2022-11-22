import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IRelationsRepository } from '@modules/Relations/repositories/Relation/IRelationsRepository.types'

@injectable()
export class UpdateRelationService {
  constructor(
    @inject('RelationsRepository')
    private relationsRepository: IRelationsRepository
  ) {}

  execute = async dataToUpdate => {
    const relation = await this.relationsRepository.findById(dataToUpdate.id)

    if (!relation) throw new AppError('Relation not found', 404)

    const finalDataToUpdate = { ...dataToUpdate }

    const updatedRelation = await this.relationsRepository.update(
      finalDataToUpdate
    )

    return { updatedRelation: { ...updatedRelation } }
  }
}
