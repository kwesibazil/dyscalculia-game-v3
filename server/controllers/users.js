const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const {genPassword}  = require('../helpers/passwordUtils.js')


const home = (req, res) => {res.status(StatusCodes.OK).json({'msg': 'already login'})}
const landing = (req, res) => {res.status(StatusCodes.OK).json({'msg': 'landing'})}
const loginSuccess = (req, res) => {res.status(StatusCodes.OK).json({'msg': 'Successfully logged in'})}
const loginFailure = (req, res) =>{res.status(StatusCodes.UNAUTHORIZED).json({'msg': 'Incorrect email or password'})}

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

  newUser.save()
    .then(_ => res.status(StatusCodes.CREATED).json({
      "title": "You have been successfully registered.",
      "body": "You will be automatically redirected to the home page in 3 seconds"
    }))
    .catch(err => {
      res.status(StatusCodes.CONFLICT).json({"msg": err.errors.email.message})
    })
}


const controller = {register,  loginFailure, loginSuccess, logout, landing, home}
module.exports = {controller}


// "userData": {
//   "email": result.email,
//   "userImage": result.img,
//   "accountType": result.userRole
// },