import { container } from 'tsyringe'

import { UpdateRequestService } from './UpdateRequestService'

export class UpdateRequestController {
  handle = async (req, res) => {
    const updateRequestService = container.resolve(UpdateRequestService)

    const response = await updateRequestService.execute({ ...req.body })

    res.json(response).status(200)
  }
}
