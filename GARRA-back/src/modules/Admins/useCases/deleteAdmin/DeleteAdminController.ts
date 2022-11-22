import { container } from 'tsyringe'

import { DeleteAdminService } from './DeleteAdminService'

export class DeleteAdminController {
  handle = async (req, res) => {
    const id = req.params.id

    const deleteAdminService = container.resolve(DeleteAdminService)

    const response = await deleteAdminService.execute(id)

    return res.status(200).json(response)
  }
}
