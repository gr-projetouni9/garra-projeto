import { inject, injectable } from 'tsyringe'

import { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'

@injectable()
export class ReadRequestsService {
  constructor(
    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository
  ) {}

  execute = async data => {
    if (data.id) {
      const request = await this.requestsRepository.findById(data.id)

      return request ? { request: { ...request } } : undefined
    } else if (data.user_id) {
      const requests = await this.requestsRepository.findByUserId(data.user_id)

      return { requests }
    }

    const requests = await this.requestsRepository.findAll()

    return { requests }
  }
}
