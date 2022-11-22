import { container } from 'tsyringe'

import { CreateRelationService } from './CreateRelationService'

export class CreateRelationController {
  handle = async (req, res) => {
    const createRelationService = container.resolve(CreateRelationService)

    const dataToCreate = { ...req.body, related_by: res.locals.user.id }

    const response = await createRelationService.execute(dataToCreate)

    return res.status(201).json(response)
  }
}
