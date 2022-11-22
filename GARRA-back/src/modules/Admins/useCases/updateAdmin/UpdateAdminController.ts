import { container } from 'tsyringe'

import { UpdateAdminService } from './UpdateAdminService'

export class UpdateAdminController {
  handle = async (req, res) => {
    const updateAdminService = container.resolve(UpdateAdminService)

    const response = await updateAdminService.execute({ ...req.body })

    res.json(response).status(200)
  }
}
