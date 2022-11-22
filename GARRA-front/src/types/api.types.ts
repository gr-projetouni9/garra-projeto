export interface ILocations {
  place: string
  sector: string
}

export interface ILinker {
  location: ILocations
  register: string
}

export interface IUser {
  email: string
  avatar: string
  linker?: ILinker
  full_name: string
}

export interface IProduct {
  id: string
  name: string
  barcode: string
  quantity: number
  created_by: string
  created_at: string
  updated_at: string
  author?: IUser
}
