import { inject, injectable } from 'tsyringe'

import type { IAdminsRepository } from '@modules/Admins/repositories/Admin/IAdminsRepository.types'
import { AppError } from '@modules/Error/models/AppError'

@injectable()
export class UpdateAdminService {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository
  ) {}

  execute = async dataToUpdate => {
    const admin = await this.adminsRepository.findById(dataToUpdate.user_id)

    if (!admin) throw new AppError('Admin not found', 404)

    const finalDataToUpdate = { ...dataToUpdate }

    const updatedAdmin = await this.adminsRepository.update(finalDataToUpdate)

    return { updatedAdmin: { ...updatedAdmin } }
  }
}
