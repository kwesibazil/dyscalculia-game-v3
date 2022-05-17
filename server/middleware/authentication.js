const {UnauthorizedError} = require('../errors/unauthorized')

const checkAuth = (req, res, next) =>{
  if(req.isAuthenticated())
    next()
  else
    throw new UnauthorizedError()
}


const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated())
    return res.redirect('logout')
  
  next()
}

const checkAdmin = (req, res, next) => {
  if(req.isAuthenticated() && req.user.userRole === 'admin')
    next()
  else 
    throw new UnauthorizedError()
}

module.exports = {checkAdmin, checkAuth, checkLoggedIn}
