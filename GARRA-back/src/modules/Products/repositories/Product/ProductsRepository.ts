import { IProductsRepository } from './IProductsRepository.types'

import { ProductModel } from '@modules/Products/models/ProductModel'

import { query } from '@shared/database'
import { generateUpdateSetFields } from '@shared/utils/generateUpdateSetFields'

export class ProductsRepository implements IProductsRepository {
  create: IProductsRepository['create'] = async ({
    id,
    name,
    created_by,
    created_at,
    updated_at,
    quantity,
    barcode
  }) => {
    const queryData = `
      INSERT INTO "product" (
        "id",
        "name",
        "barcode",
        "quantity",
        "created_by",
        "created_at",
        "updated_at"
      ) VALUES (
        '${id}',
        '${name}',
        '${barcode}',
        '${quantity}',
        '${created_by}',
        '${created_at}',
        '${updated_at}'
      ) RETURNING *;
    `

    const createdProduct = (await query<ProductModel>(queryData)).rows[0]

    return createdProduct
  }

  findAll: IProductsRepository['findAll'] = async () => {
    const queryData = `SELECT * FROM "product";`

    const allProducts = (await query<ProductModel>(queryData)).rows

    return allProducts
  }

  findById: IProductsRepository['findById'] = async id => {
    const queryData = `SELECT * FROM "product" WHERE "id"='${id}';`

    const foundProduct = (await query<ProductModel>(queryData)).rows[0]

    return foundProduct
  }

  update: IProductsRepository['update'] = async dataToUpdate => {
    const queryData = `
        UPDATE
          "product"
        SET
          ${generateUpdateSetFields({ ...dataToUpdate, id: undefined })}
        WHERE
          "id" = '${dataToUpdate.id}';
      `

    await query<ProductModel>(queryData)

    const updatedProduct = await this.findById(dataToUpdate.id)

    return updatedProduct
  }

  delete: IProductsRepository['delete'] = async id => {
    const queryData = `DELETE FROM "product" WHERE "id"='${id}';`

    await query(queryData)
  }
}
