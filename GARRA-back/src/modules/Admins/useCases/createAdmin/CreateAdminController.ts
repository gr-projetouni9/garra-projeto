import { container } from 'tsyringe'

import { CreateAdminService } from './CreateAdminService'

export class CreateAdminController {
  handle = async (req, res) => {
    const createAdminService = container.resolve(CreateAdminService)

    const dataToCreate = req.body

    const response = await createAdminService.execute(dataToCreate)

    return res.status(201).json(response)
  }
}
