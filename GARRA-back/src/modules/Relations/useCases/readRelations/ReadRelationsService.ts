import { inject, injectable } from 'tsyringe'

import { IRelationsRepository } from '@modules/Relations/repositories/Relation/IRelationsRepository.types'

@injectable()
export class ReadRelationsService {
  constructor(
    @inject('RelationsRepository')
    private relationsRepository: IRelationsRepository
  ) {}

  execute = async id => {
    if (id) {
      const relation = await this.relationsRepository.findById(id)

      return relation ? { relation: { ...relation } } : undefined
    }

    const relations = await this.relationsRepository.findAll()

    return { relations }
  }
}
