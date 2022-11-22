import { UserModel } from '../../models/UserModel'

type TCreate = (data: UserModel) => Promise<UserModel>

type TFindById = (id: UserModel['id']) => Promise<UserModel>

type TFindAll = () => Promise<UserModel[]>

type TFindByEmail = (
  email: UserModel['email']
) => Promise<UserModel | undefined>

type TDelete = (id: UserModel['id']) => Promise<void>

type TUpdate = (data: Partial<UserModel>) => Promise<UserModel>

interface IUsersRepository {
  update: TUpdate
  create: TCreate
  delete: TDelete
  findAll: TFindAll
  findById: TFindById
  findByEmail: TFindByEmail
}

export type { IUsersRepository }
