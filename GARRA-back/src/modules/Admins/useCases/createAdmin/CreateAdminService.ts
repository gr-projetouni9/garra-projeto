import { inject, injectable } from 'tsyringe'

import { AdminModel } from '@modules/Admins/models/AdminModel'
import { IAdminsRepository } from '@modules/Admins/repositories/Admin/IAdminsRepository.types'

@injectable()
export class CreateAdminService {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository
  ) {}

  execute = async data => {
    const newAdmin = new AdminModel(data.user_id)

    Object.assign(newAdmin, data)

    const createdAdmin = await this.adminsRepository.create(newAdmin)

    return { createdAdmin: { ...createdAdmin } }
  }
}
