const { NotFoundError } = require("../errors")

const isEmpty = result =>  {
  if (result == null) 
    throw new NotFoundError()
  else
    return false
}

module.exports = {isEmpty}

