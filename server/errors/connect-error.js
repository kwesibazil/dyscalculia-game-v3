const {StatusCodes} = require('http-status-codes')
const CustomError = require('./custom-error')

class ConnectError extends CustomError {
  constructor(message){
    super(message)
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  }
}

module.exports = ConnectError