import { IAdminsRepository } from './IAdminsRepository.types'

import { AdminModel } from '@modules/Admins/models/AdminModel'

import { query } from '@shared/database'

export class AdminsRepository implements IAdminsRepository {
  create: IAdminsRepository['create'] = async ({
    user_id,
    created_at,
    register,
    updated_at
  }) => {
    const queryData = `
      INSERT INTO "admin" (
        "user_id",
        "register",
        "created_at",
        "updated_at"
      ) VALUES (
        '${user_id}',
        '${register}',
        '${created_at}',
        '${updated_at}'
      ) RETURNING *;
    `

    const createdAdmin = (await query<AdminModel>(queryData)).rows[0]

    return createdAdmin
  }

  findAll: IAdminsRepository['findAll'] = async () => {
    const queryData = `SELECT * FROM "admin";`

    const allAdmins = (await query<AdminModel>(queryData)).rows

    return allAdmins
  }

  findById: IAdminsRepository['findById'] = async id => {
    const queryData = `SELECT * FROM "admin" WHERE "user_id"='${id}';`

    const foundAdmin = (await query<AdminModel>(queryData)).rows[0]

    return foundAdmin
  }

  update: IAdminsRepository['update'] = async data => {
    const updateQuery = (name: string, value: string) =>
      `
        UPDATE
          "admin"
        SET
          "${name}" = '${value}'
        WHERE
          "user_id" = '${data.user_id}';
      `

    let queryData = ''
    const dataToUpdate: any[][] = Object.entries(data)

    for (let i = 0; i < dataToUpdate.length; i++) {
      const name = dataToUpdate[i][0]
      const value = dataToUpdate[i][1]

      if (name && value) queryData = queryData + updateQuery(name, value)
    }

    await query<AdminModel>(queryData)

    const updatedAdmin = await this.findById(data.user_id)

    return updatedAdmin
  }

  delete: IAdminsRepository['delete'] = async id => {
    const queryData = `DELETE FROM "admin" WHERE "user_id"='${id}';`

    await query(queryData)
  }
}
