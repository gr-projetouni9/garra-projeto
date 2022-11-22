import { inject, injectable } from 'tsyringe'

import type { IAdminsRepository } from '@modules/Admins/repositories/Admin/IAdminsRepository.types'
import { AppError } from '@modules/Error/models/AppError'

@injectable()
export class DeleteAdminService {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository
  ) {}

  execute = async id => {
    const foundAdmin = await this.adminsRepository.findById(id)

    if (!foundAdmin) throw new AppError('Admin does not exist', 400)

    await this.adminsRepository.delete(id)

    return { deletedAdmin: { ...foundAdmin } }
  }
}
