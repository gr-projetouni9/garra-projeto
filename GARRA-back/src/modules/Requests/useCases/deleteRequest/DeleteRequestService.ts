import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'

@injectable()
export class DeleteRequestService {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository
  ) {}

  execute = async id => {
    const foundRequest = await this.requestsRepository.findById(id)

    if (!foundRequest) throw new AppError('Request does not exist', 400)

    await this.requestsRepository.delete(id)

    return {
      deletedRequest: { ...foundRequest }
    }
  }
}
