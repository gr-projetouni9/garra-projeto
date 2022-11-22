import bcrypt from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import { UserModel } from '@modules/Users/models/UserModel'
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

import { bufferToB64 } from '@shared/utils/b64'

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute = async data => {
    if (!data.full_name) throw new AppError('Need the full_name', 400)

    const foundByEmail = await this.usersRepository.findByEmail(data.email)

    if (foundByEmail) throw new AppError('E-mail already exists', 400)

    const newUser = new UserModel()

    Object.assign(newUser, data)

    newUser.password = bcrypt.hashSync(data.password, 10)

    const createdUser = await this.usersRepository.create(newUser)

    return {
      createdUser: {
        ...createdUser,
        password: undefined,
        avatar: bufferToB64(createdUser?.avatar)
      }
    }
  }
}

export { CreateUserService }
