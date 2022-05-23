const {StatusCodes} = require('http-status-codes')

const notFound = (req, res) => res.status(StatusCodes.NOT_FOUND).json({"err":"404 Page Not Found"})

module.exports = notFound
