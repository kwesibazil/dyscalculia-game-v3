const BadRequestError = require('./bad-request')
const ConnectError = require('./connect-error')
const CustomError = require('./custom-error')
const UnauthorizedError = require('./unauthorized')
const ConflictError = require('./conflictError')

module.exports = {
  BadRequestError,
  ConflictError,
  ConnectError,
  CustomError,
  UnauthorizedError
}