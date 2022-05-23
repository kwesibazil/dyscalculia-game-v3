const BadRequestError = require('./bad-request')
const ConnectError = require('./connect-error')
const CustomError = require('./custom-error')
const UnauthorizedError = require('./unauthorized')
const ConflictError = require('./conflict-error')
const NotFoundError = require('./not-found')

module.exports = {
  BadRequestError,
  ConflictError,
  ConnectError,
  CustomError,
  NotFoundError,
  UnauthorizedError
}