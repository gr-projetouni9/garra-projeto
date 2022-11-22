import { Router } from 'express'

import { CreateRequestController } from '@modules/Requests/useCases/createRequest/CreateRequestController'
import { DeleteRequestController } from '@modules/Requests/useCases/deleteRequest/DeleteRequestController'
import { ReadRequestsController } from '@modules/Requests/useCases/readRequests/ReadRequestsController'
import { UpdateRequestController } from '@modules/Requests/useCases/updateRequest/UpdateRequestController'

import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication'

const requestsRoutes = Router()

const readRequestsController = new ReadRequestsController()
const createRequestController = new CreateRequestController()
const updateRequestController = new UpdateRequestController()
const deleteRequestController = new DeleteRequestController()

requestsRoutes.post(
  '/requests',
  ensureAuthentication,
  createRequestController.handle
)

requestsRoutes.get(
  '/requests',
  ensureAuthentication,
  readRequestsController.handle
)

requestsRoutes.delete(
  '/requests/:id',
  ensureAuthentication,
  deleteRequestController.handle
)

requestsRoutes.patch(
  '/requests',
  ensureAuthentication,
  updateRequestController.handle
)

requestsRoutes.get(
  '/request',
  ensureAuthentication,
  readRequestsController.handle
)

export { requestsRoutes }
