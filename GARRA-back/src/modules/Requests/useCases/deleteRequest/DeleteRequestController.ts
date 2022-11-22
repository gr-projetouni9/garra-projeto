import { container } from 'tsyringe'

import { DeleteRequestService } from './DeleteRequestService'

export class DeleteRequestController {
  handle = async (req, res) => {
    const id = req.params.id

    const deleteRequestService = container.resolve(DeleteRequestService)

    const response = await deleteRequestService.execute(id)

    return res.status(200).json(response)
  }
}
