import { Router } from 'express'

import { CreateRelationController } from '@modules/Relations/useCases/createRelation/CreateRelationController'
import { DeleteRelationController } from '@modules/Relations/useCases/deleteRelation/DeleteRelationController'
import { ReadRelationsController } from '@modules/Relations/useCases/readRelations/ReadRelationsController'
import { UpdateRelationController } from '@modules/Relations/useCases/updateRelation/UpdateRelationController'

import { ensureAdmin } from '@shared/middlewares/ensureAdmin'
import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication'

const relationsRoutes = Router()

const readRelationsController = new ReadRelationsController()
const createRelationController = new CreateRelationController()
const updateRelationController = new UpdateRelationController()
const deleteRelationController = new DeleteRelationController()

relationsRoutes.post(
  '/relations',
  ensureAuthentication,
  ensureAdmin,
  createRelationController.handle
)

relationsRoutes.get(
  '/relations/:id?',
  ensureAuthentication,
  readRelationsController.handle
)

relationsRoutes.delete(
  '/relations/:id',
  ensureAuthentication,
  ensureAdmin,
  deleteRelationController.handle
)

relationsRoutes.patch(
  '/relations',
  ensureAuthentication,
  ensureAdmin,
  updateRelationController.handle
)

relationsRoutes.get(
  '/relation',
  ensureAuthentication,
  ensureAdmin,
  readRelationsController.handle
)

export { relationsRoutes }
