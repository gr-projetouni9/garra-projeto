import { container } from 'tsyringe'

import { CreateProductService } from './CreateProductService'

export class CreateProductController {
  handle = async (req, res) => {
    const createProductService = container.resolve(CreateProductService)

    const dataToCreate = { ...req.body, created_by: res.locals.user.id }

    const response = await createProductService.execute(dataToCreate)

    return res.status(201).json(response)
  }
}
