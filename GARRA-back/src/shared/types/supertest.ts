import { Response as SuperTestResponse } from 'supertest'

interface ISuperResponse<Response> extends SuperTestResponse {
  body: Response
}

export type { ISuperResponse }
