import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'

@injectable()
export class UpdateRequestService {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository
  ) {}

  execute = async dataToUpdate => {
    const request = await this.requestsRepository.findById(dataToUpdate.id)

    if (!request) throw new AppError('Request not found', 404)

    const finalDataToUpdate = { ...dataToUpdate }

    const updatedRequest = await this.requestsRepository.update(
      finalDataToUpdate
    )

    return { updatedRequest: { ...updatedRequest } }
  }
}
