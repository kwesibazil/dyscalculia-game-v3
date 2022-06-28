const BadRequestError = require('./bad-request')
const ConnectError = require('./connect-error')
const CustomError = require('./custom-error')
const UnauthorizedError = require('./unauthorized')
const ConflictError = require('./conflict-error')
const NotFoundError = require('./not-found')
const ForbiddenError = require('./forbidden-error')
const NoContentError = require('./no-content-error')

module.exports = {
  BadRequestError,
  ConflictError,
  ConnectError,
  CustomError,
  ForbiddenError,
  NotFoundError,
  NoContentError,
  UnauthorizedError
}