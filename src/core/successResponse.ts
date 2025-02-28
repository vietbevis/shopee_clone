import { Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

class SusscessResponse<T> {
  code: number
  message: string
  data?: T
  timestamp: string

  constructor(code: number, message: string, data?: T) {
    this.code = code
    this.message = message
    this.data = data
    this.timestamp = new Date().toISOString()
  }

  send(res: Response) {
    res.status(this.code).json(this)
  }
}

class OkResponse<T> extends SusscessResponse<T> {
  constructor(message: string = ReasonPhrases.OK, data?: T) {
    super(StatusCodes.OK, message, data)
  }
}

class CreatedResponse<T> extends SusscessResponse<T> {
  constructor(message: string = ReasonPhrases.CREATED, data?: T) {
    super(StatusCodes.CREATED, message, data)
  }
}

export { OkResponse, CreatedResponse }

/**
 * code: 200
 * message: "Success"
 * data: { ... }
 * errors: null
 * timestamp: "2021-09-01T00:00:00.000Z"
 */
