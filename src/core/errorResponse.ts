import { ReasonPhrases, StatusCodes } from 'http-status-codes'

class ErrorResponse extends Error {
  code: number
  errors?: any
  timestamp: string

  constructor(code: number, message: string, errors?: any) {
    super(message)
    this.code = code
    this.errors = errors
    this.timestamp = new Date().toISOString()
  }
}

class BadRequestError extends ErrorResponse {
  constructor(message: string = ReasonPhrases.BAD_REQUEST, errors?: any) {
    super(StatusCodes.BAD_REQUEST, message, errors)
  }
}

class UnauthorizedError extends ErrorResponse {
  constructor(message: string = ReasonPhrases.UNAUTHORIZED, errors?: any) {
    super(StatusCodes.UNAUTHORIZED, message, errors)
  }
}

class ForbiddenError extends ErrorResponse {
  constructor(message: string = ReasonPhrases.FORBIDDEN, errors?: any) {
    super(StatusCodes.FORBIDDEN, message, errors)
  }
}

class NotFoundError extends ErrorResponse {
  constructor(message: string = ReasonPhrases.NOT_FOUND, errors?: any) {
    super(StatusCodes.NOT_FOUND, message, errors)
  }
}

class InternalServerError extends ErrorResponse {
  constructor(message: string = ReasonPhrases.INTERNAL_SERVER_ERROR, errors?: any) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message, errors)
  }
}

export { ErrorResponse, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, InternalServerError }

/**
 * code: 400
 * message: "Bad Request"
 * errors: { ... }
 * timestamp: "2021-09-01T00:00:00.000Z"
 */
