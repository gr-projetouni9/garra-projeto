import { Router } from 'express'

import { CreateAdminController } from '@modules/Admins/useCases/createAdmin/CreateAdminController'
import { DeleteAdminController } from '@modules/Admins/useCases/deleteAdmin/DeleteAdminController'
import { ReadAdminsController } from '@modules/Admins/useCases/readAdmins/ReadAdminsController'
import { UpdateAdminController } from '@modules/Admins/useCases/updateAdmin/UpdateAdminController'

const adminsRoutes = Router()

const readAdminsController = new ReadAdminsController()
const createAdminController = new CreateAdminController()
const updateAdminController = new UpdateAdminController()
const deleteAdminController = new DeleteAdminController()

adminsRoutes.post('/admins', createAdminController.handle)
adminsRoutes.get('/admins/:id?', readAdminsController.handle)
adminsRoutes.delete('/admins/:id', deleteAdminController.handle)
adminsRoutes.patch('/admins', updateAdminController.handle)
adminsRoutes.get('/admin', readAdminsController.handle)

export { adminsRoutes }
