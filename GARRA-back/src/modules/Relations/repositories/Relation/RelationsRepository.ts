import { IRelationsRepository } from './IRelationsRepository.types'

import { RelationModel } from '@modules/Relations/models/RelationModel'

import { query } from '@shared/database'

export class RelationsRepository implements IRelationsRepository {
  create: IRelationsRepository['create'] = async ({
    id,
    created_at,
    updated_at,
    product_id,
    request_id,
    related_by
  }) => {
    const queryData = `
      INSERT INTO "relation" (
        "id",
        "created_at",
        "updated_at",
        "product_id",
        "request_id",
        "related_by"
      ) VALUES (
        '${id}',
        '${created_at}',
        '${updated_at}',
        '${product_id}',
        '${request_id}',
        '${related_by}'
      ) RETURNING *;
    `

    const createdRelation = (await query<RelationModel>(queryData)).rows[0]

    return createdRelation
  }

  findAll: IRelationsRepository['findAll'] = async () => {
    const queryData = `SELECT * FROM "relation";`

    const allRelations = (await query<RelationModel>(queryData)).rows

    return allRelations
  }

  findById: IRelationsRepository['findById'] = async id => {
    const queryData = `SELECT * FROM "relation" WHERE "id"='${id}';`

    const foundRelation = (await query<RelationModel>(queryData)).rows[0]

    return foundRelation
  }

  update: IRelationsRepository['update'] = async data => {
    const updateQuery = (name: string, value: string) =>
      `
        UPDATE
          "relation"
        SET
          "${name}" = '${value}'
        WHERE
          "id" = '${data.id}';
      `

    let queryData = ''
    const dataToUpdate: any[][] = Object.entries(data)

    for (let i = 0; i < dataToUpdate.length; i++) {
      const name = dataToUpdate[i][0]
      const value = dataToUpdate[i][1]

      if (name && value) queryData = queryData + updateQuery(name, value)
    }

    await query<RelationModel>(queryData)

    const updatedRelation = await this.findById(data.id)

    return updatedRelation
  }

  delete: IRelationsRepository['delete'] = async id => {
    const queryData = `DELETE FROM "relation" WHERE "id"='${id}';`

    await query(queryData)
  }
}
