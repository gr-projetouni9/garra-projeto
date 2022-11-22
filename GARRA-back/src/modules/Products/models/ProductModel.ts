import { v4 as uuid } from 'uuid'

export class ProductModel {
  id: string
  name: string
  barcode: string
  quantity: number
  created_by: string
  created_at: string
  updated_at: string

  constructor() {
    this.id = this.id ?? uuid()
    this.created_at = this.created_at ?? new Date().toISOString()
    this.updated_at = this.updated_at ?? new Date().toISOString()
  }
}
