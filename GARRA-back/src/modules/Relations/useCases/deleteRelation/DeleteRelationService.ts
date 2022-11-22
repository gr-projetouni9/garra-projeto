import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IRelationsRepository } from '@modules/Relations/repositories/Relation/IRelationsRepository.types'

@injectable()
export class DeleteRelationService {
  constructor(
    @inject('RelationsRepository')
    private relationsRepository: IRelationsRepository
  ) {}

  execute = async id => {
    const foundRelation = await this.relationsRepository.findById(id)

    if (!foundRelation) throw new AppError('Relation does not exist', 400)

    await this.relationsRepository.delete(id)

    return {
      deletedRelation: { ...foundRelation }
    }
  }
}
