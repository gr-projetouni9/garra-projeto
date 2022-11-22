import cors from 'cors'
import express from 'express'
import 'express-async-errors'

import { productsRoutes } from '../../shared/routes/products.routes'
import { relationsRoutes } from '../../shared/routes/relations.routes'
import { adminsRoutes } from './admins.routes'
import { authRoutes } from './auth.routes'
import { requestsRoutes } from './requests.routes'
import { usersRoutes } from './users.routes'

import { ThrowAppErrorController } from '@modules/Error/useCases/throwError/ThrowAppErrorController'

export const app = express()

const errorHandler = new ThrowAppErrorController().handle

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'Garra API' })
})

app.use(usersRoutes)
app.use(adminsRoutes)
app.use(productsRoutes)
app.use(requestsRoutes)
app.use('/auth', authRoutes)
app.use(relationsRoutes)
app.use(errorHandler)
