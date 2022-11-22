import { container } from 'tsyringe'

import { DeleteRelationService } from './DeleteRelationService'

export class DeleteRelationController {
  handle = async (req, res) => {
    const id = req.params.id

    const deleteRelationService = container.resolve(DeleteRelationService)

    const response = await deleteRelationService.execute(id)

    return res.status(200).json(response)
  }
}
