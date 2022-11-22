import { container } from 'tsyringe'

import { UpdateRelationService } from './UpdateRelationService'

export class UpdateRelationController {
  handle = async (req, res) => {
    const updateRelationService = container.resolve(UpdateRelationService)

    const response = await updateRelationService.execute({ ...req.body })

    res.json(response).status(200)
  }
}
