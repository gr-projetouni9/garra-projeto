import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class SignInService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute = async ({ email, password }) => {
    if (!email || !password)
      throw new AppError('Need to provide username or email, and password', 400)

    const foundUser = await this.usersRepository.findByEmail(email)

    if (!foundUser) throw new AppError('Invalid email or password', 401)

    const authorized = await bcrypt.compare(password, foundUser.password)

    if (!authorized) throw new AppError('Invalid email or password', 401)

    const token = jwt.sign({}, process.env.API_JWT_SECRET, {
      expiresIn: '1d',
      subject: foundUser.id
    })

    return { token, id: foundUser.id }
  }
}

export { SignInService }
