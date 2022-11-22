import { container } from 'tsyringe'

import { DeleteProductService } from './DeleteProductService'

export class DeleteProductController {
  handle = async (req, res) => {
    const id = req.params.id

    const deleteProductService = container.resolve(DeleteProductService)

    const response = await deleteProductService.execute(id)

    return res.status(200).json(response)
  }
}
