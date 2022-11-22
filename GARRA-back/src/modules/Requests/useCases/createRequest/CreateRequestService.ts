import { inject, injectable } from 'tsyringe'

import { RequestModel } from '@modules/Requests/models/RequestModel'
import { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'

@injectable()
export class CreateRequestService {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository
  ) {}

  execute = async data => {
    const newRequest = new RequestModel()

    Object.assign(newRequest, data)

    const createdRequest = await this.requestsRepository.create(newRequest)

    return { createdRequest: { ...createdRequest } }
  }
}
