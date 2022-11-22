import { AdminModel } from '@modules/Admins/models/AdminModel'

type TCreate = (data: AdminModel) => Promise<AdminModel>

type TFindAll = () => Promise<AdminModel[]>

type TFindById = (id: AdminModel['user_id']) => Promise<AdminModel>

type TDelete = (id: AdminModel['user_id']) => Promise<void>

type TUpdate = (data: Partial<AdminModel>) => Promise<AdminModel>

interface IAdminsRepository {
  update: TUpdate
  create: TCreate
  delete: TDelete
  findAll: TFindAll
  findById: TFindById
}

export type { IAdminsRepository }
