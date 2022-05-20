const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const {genPassword}  = require('../helpers/passwordUtils.js')


const loginFailure = (req, res) =>{res.status(StatusCodes.UNAUTHORIZED).json({
  'msg': 'Incorrect email or password',
  'isAuthenticated': req.isAuthenticated()
})}

const loginSuccess = (req, res) => {
  console.log('is authenticated  ---' + req.isAuthenticated());

  res.status(StatusCodes.OK).json({
  'msg': 'Successfully logged in', 
  'isAuthenticated': req.isAuthenticated()
})}

const logout = (req, res) =>{ 
  req.logOut()
  res.redirect('landing')
}

/** 
 * @route POST api/v2/user/register
 * @returns http status code (409 || 201) and json msg
 * @summary hash password using genPassword function, then adds user details to the database
 * @description
 *          if successful return 201 and success custom mgs
 *          checks if email already exist, if TRUE, return Conflict status code  with custom msg <check model schema>
*/
const register = async (req, res) => {
  const hash = await genPassword(req.sanitizeData.pwd)
  const newUser = new User({
    email: req.sanitizeData.email,
    hash: hash,
    img: req.sanitizeData.img,
    userRole: req.sanitizeData.userRole
  })
    console.log('is authenticated  ---  ' + req.isAuthenticated());

  newUser.save()
    .then(_ => res.status(StatusCodes.CREATED).json({"msg": "registration successful."}))
    .catch(err => {
      res.status(StatusCodes.CONFLICT).json({"err": err.errors.email.message})
    })
}

const controller = {register,  loginFailure, loginSuccess, logout}
module.exports = {controller}
