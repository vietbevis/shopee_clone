import { ErrorResponse } from '@/core/errorResponse'
import { NextFunction, Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const endPointNotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    code: StatusCodes.NOT_FOUND,
    message: 'Endpoint not found',
    timestamp: new Date().toISOString()
  })
}

export const globalErrorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  console.log('Global error handler: ', err)

  const errorMessage = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
  const code = err.code || StatusCodes.INTERNAL_SERVER_ERROR

  res.status(code).json({
    code,
    message: errorMessage,
    errors: err.errors || undefined,
    timestamp: new Date().toISOString()
  })
}
