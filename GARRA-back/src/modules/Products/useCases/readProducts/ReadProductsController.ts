import { container } from 'tsyringe'

import { ReadProductsService } from './ReadProductsService'

import { AppError } from '@modules/Error/models/AppError'

export class ReadProductsController {
  handle = async (req, res) => {
    const id = req.params.id

    const readProductsService = container.resolve(ReadProductsService)

    const response = await readProductsService.execute(id)

    if (!response) throw new AppError('Product not found', 404)

    res.json(response).status(200)
  }
}
