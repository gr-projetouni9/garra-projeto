export class AdminModel {
  user_id: string
  register: string

  created_at: string
  updated_at: string

  constructor(user_id) {
    this.user_id = user_id
    this.created_at = this.created_at ?? new Date().toISOString()
    this.updated_at = this.updated_at ?? new Date().toISOString()
  }
}
