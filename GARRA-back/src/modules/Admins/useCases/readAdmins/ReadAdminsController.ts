import { container } from 'tsyringe'

import { ReadAdminsService } from './ReadAdminsService'

import { AppError } from '@modules/Error/models/AppError'

export class ReadAdminsController {
  handle = async (req, res) => {
    const id = req.params.id

    const readAdminsService = container.resolve(ReadAdminsService)

    const response = await readAdminsService.execute(id)

    if (!response) throw new AppError('Admin not found', 404)

    res.json(response).status(200)
  }
}
