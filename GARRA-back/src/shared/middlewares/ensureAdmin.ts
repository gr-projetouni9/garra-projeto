import type { RequestHandler } from 'express'
import { container } from 'tsyringe'

import { ReadAdminsService } from '@modules/Admins/useCases/readAdmins/ReadAdminsService'
import { AppError } from '@modules/Error/models/AppError'

export const ensureAdmin: RequestHandler<any> = async (req, res, next) => {
  if (!res.locals.user.id)
    throw new AppError(
      'User must be authenticated to ensure he is an administrator',
      401
    )

  const readAdminsService = container.resolve(ReadAdminsService)

  const adminRes = await readAdminsService.execute(res.locals.user.id)

  if (!adminRes?.admin) throw new AppError("User isn't administrator", 401)

  return next()
}
