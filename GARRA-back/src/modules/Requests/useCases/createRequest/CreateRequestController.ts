import { container } from 'tsyringe'

import { CreateRequestService } from './CreateRequestService'

export class CreateRequestController {
  handle = async (req, res) => {
    const createRequestService = container.resolve(CreateRequestService)

    const dataToCreate = req.body

    const response = await createRequestService.execute(dataToCreate)

    return res.status(201).json(response)
  }
}
