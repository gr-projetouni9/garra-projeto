import { inject, injectable } from 'tsyringe'

import { IAdminsRepository } from '@modules/Admins/repositories/Admin/IAdminsRepository.types'

@injectable()
export class ReadAdminsService {
  constructor(
    @inject('AdminsRepository') private adminsRepository: IAdminsRepository
  ) {}

  execute = async id => {
    if (id) {
      const admin = await this.adminsRepository.findById(id)

      return admin ? { admin: { ...admin } } : undefined
    }

    const admins = await this.adminsRepository.findAll()

    return { admins }
  }
}
