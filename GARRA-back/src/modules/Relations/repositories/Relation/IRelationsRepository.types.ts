import { RelationModel } from '@modules/Relations/models/RelationModel'

type TCreate = (data: RelationModel) => Promise<RelationModel>

type TFindById = (id: RelationModel['id']) => Promise<RelationModel>

type TFindAll = () => Promise<RelationModel[]>

type TDelete = (id: RelationModel['id']) => Promise<void>

type TUpdate = (data: Partial<RelationModel>) => Promise<RelationModel>

interface IRelationsRepository {
  update: TUpdate
  create: TCreate
  delete: TDelete
  findAll: TFindAll
  findById: TFindById
}

export type { IRelationsRepository }
