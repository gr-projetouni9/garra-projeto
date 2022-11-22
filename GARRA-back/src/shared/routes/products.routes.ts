import { Router } from 'express'

import { CreateProductController } from '@modules/Products/useCases/createProduct/CreateProductController'
import { DeleteProductController } from '@modules/Products/useCases/deleteProduct/DeleteProductController'
import { ReadProductsController } from '@modules/Products/useCases/readProducts/ReadProductsController'
import { UpdateProductController } from '@modules/Products/useCases/updateProduct/UpdateProductController'

import { ensureAdmin } from '@shared/middlewares/ensureAdmin'
import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication'

const productsRoutes = Router()

const readProductsController = new ReadProductsController()
const createProductController = new CreateProductController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()

productsRoutes.post(
  '/products',
  ensureAuthentication,
  ensureAdmin,
  createProductController.handle
)

productsRoutes.get(
  '/products/:id?',
  ensureAuthentication,
  readProductsController.handle
)

productsRoutes.delete(
  '/products/:id',
  ensureAuthentication,
  ensureAdmin,
  deleteProductController.handle
)

productsRoutes.patch(
  '/products',
  ensureAuthentication,
  ensureAdmin,
  updateProductController.handle
)

productsRoutes.get(
  '/product',
  ensureAuthentication,
  ensureAdmin,
  readProductsController.handle
)

export { productsRoutes }
