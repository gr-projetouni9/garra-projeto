import { container } from 'tsyringe'

import { ReadRequestsService } from './ReadRequestsService'

import { AppError } from '@modules/Error/models/AppError'

export class ReadRequestsController {
  handle = async (req, res) => {
    const readRequestsService = container.resolve(ReadRequestsService)

    const response = await readRequestsService.execute(req.query)

    if (!response) throw new AppError('Request not found', 404)

    res.json(response).status(200)
  }
}
