import { RequestModel } from '@modules/Requests/models/RequestModel'

type TCreate = (data: RequestModel) => Promise<RequestModel>

type TFindById = (id: RequestModel['id']) => Promise<RequestModel>

type TFindByUserId = (id: RequestModel['user_id']) => Promise<RequestModel[]>

type TFindAll = () => Promise<RequestModel[]>

type TDelete = (id: RequestModel['id']) => Promise<void>

type TUpdate = (data: Partial<RequestModel>) => Promise<RequestModel>

interface IRequestsRepository {
  update: TUpdate
  create: TCreate
  delete: TDelete
  findAll: TFindAll
  findById: TFindById
  findByUserId: TFindByUserId
}

export type { IRequestsRepository }
