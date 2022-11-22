import { v4 as uuid } from 'uuid'

export class RelationModel {
  id: string
  created_at: string
  updated_at: string
  product_id: string
  request_id: string
  related_by: string

  constructor() {
    this.id = this.id ?? uuid()
    this.created_at = this.created_at ?? new Date().toISOString()
    this.updated_at = this.updated_at ?? new Date().toISOString()
  }
}
