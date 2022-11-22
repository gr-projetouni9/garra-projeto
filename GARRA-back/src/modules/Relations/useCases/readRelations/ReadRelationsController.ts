import { container } from 'tsyringe'

import { ReadRelationsService } from './ReadRelationsService'

import { AppError } from '@modules/Error/models/AppError'

export class ReadRelationsController {
  handle = async (req, res) => {
    const id = req.params.id

    const readRelationsService = container.resolve(ReadRelationsService)

    const response = await readRelationsService.execute(id)

    if (!response) throw new AppError('Relation not found', 404)

    res.json(response).status(200)
  }
}
