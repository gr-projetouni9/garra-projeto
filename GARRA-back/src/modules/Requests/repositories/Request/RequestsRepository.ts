import { IRequestsRepository } from './IRequestsRepository.types'

import { RequestModel } from '@modules/Requests/models/RequestModel'

import { query } from '@shared/database'
import { generateUpdateSetFields } from '@shared/utils/generateUpdateSetFields'

export class RequestsRepository implements IRequestsRepository {
  create: IRequestsRepository['create'] = async ({
    id,
    user_id,
    quantity,
    description,
    created_at,
    updated_at
  }) => {
    const queryData = `
      INSERT INTO "request" (
        "id",
        "user_id",
        "quantity",
        "description",
        "created_at",
        "updated_at"
      ) VALUES (
        '${id}',
        '${user_id}',
        '${quantity}',
        '${description}',
        '${created_at}',
        '${updated_at}'
      ) RETURNING *;
    `

    const createdRequest = (await query<RequestModel>(queryData)).rows[0]

    return createdRequest
  }

  findAll: IRequestsRepository['findAll'] = async () => {
    const queryData = `SELECT * FROM "request";`

    const allRequests = (await query<RequestModel>(queryData)).rows

    return allRequests
  }

  findById: IRequestsRepository['findById'] = async id => {
    const queryData = `SELECT * FROM "request" WHERE "id"='${id}';`

    const foundRequest = (await query<RequestModel>(queryData)).rows[0]

    return foundRequest
  }

  findByUserId: IRequestsRepository['findByUserId'] = async user_id => {
    const queryData = `SELECT * FROM "request" WHERE "user_id"='${user_id}';`

    const foundRequest = (await query<RequestModel>(queryData)).rows

    return foundRequest
  }

  update: IRequestsRepository['update'] = async data => {
    const queryData = `
        UPDATE
          "request"
        SET
          ${generateUpdateSetFields({ ...data, id: undefined })}
        WHERE
          "id" = '${data.id}';
      `

    await query<RequestModel>(queryData)

    const updatedRequest = await this.findById(data.id)

    return updatedRequest
  }

  delete: IRequestsRepository['delete'] = async id => {
    const queryData = `DELETE FROM "request" WHERE "id"='${id}';`

    await query(queryData)
  }
}
