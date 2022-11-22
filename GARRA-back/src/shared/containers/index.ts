import { container } from 'tsyringe'

import { AdminsRepository } from '@modules/Admins/repositories/Admin/AdminsRepository'
import { IAdminsRepository } from '@modules/Admins/repositories/Admin/IAdminsRepository.types'
import { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'
import { ProductsRepository } from '@modules/Products/repositories/Product/ProductsRepository'
import { IRelationsRepository } from '@modules/Relations/repositories/Relation/IRelationsRepository.types'
import { RelationsRepository } from '@modules/Relations/repositories/Relation/RelationsRepository'
import { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'
import { RequestsRepository } from '@modules/Requests/repositories/Request/RequestsRepository'
import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UsersRepository } from '@modules/Users/repositories/User/UserRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IAdminsRepository>(
  'AdminsRepository',
  AdminsRepository
)

container.registerSingleton<IRequestsRepository>(
  'RequestsRepository',
  RequestsRepository
)

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
)

container.registerSingleton<IRelationsRepository>(
  'RelationsRepository',
  RelationsRepository
)
