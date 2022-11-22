import { AppError } from '../../models/AppError'

class ThrowAppErrorService {
  execute = error => {
    return error instanceof AppError
      ? { error: error.message, statusCode: error.statusCode }
      : { error: 'Internal server error - ' + error.message, statusCode: 500 }
  }
}

export { ThrowAppErrorService }
