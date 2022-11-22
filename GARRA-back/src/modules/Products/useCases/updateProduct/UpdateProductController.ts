import { container } from 'tsyringe'

import { UpdateProductService } from './UpdateProductService'

export class UpdateProductController {
  handle = async (req, res) => {
    const updateProductService = container.resolve(UpdateProductService)

    const response = await updateProductService.execute({ ...req.body })

    res.json(response).status(200)
  }
}
