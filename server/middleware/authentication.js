const {UnauthorizedError, NotFoundError} = require('../errors')

const checkLoggedIn = (req, res, next) =>{
  console.log(`this is checkloggedIn ---> ${req.isAuthenticated()}` );
  if(req.isAuthenticated())
    next()
  else
    throw new UnauthorizedError()
}

const checkAdmin = (req, res, next) => {
  if(req.isAuthenticated() && req.user.userRole === 'admin')
    next()
  else 
    throw new UnauthorizedError()
}


const validRoute = (req, res, next) => {
  let err= `Route does not exist`;
  if(req.originalUrl === "/api/v2/users" || url === "/api/v2/dashboard")
    next()
  else
    throw new NotFoundError(err)
}



module.exports = {checkAdmin,  checkLoggedIn, validRoute }







// const checkLoggedIn = (req, res, next) => {
//   if (req.isAuthenticated())
//     return res.redirect('logout')
//   next()
// }
