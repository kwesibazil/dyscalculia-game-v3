const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const {genPassword}  = require('../helpers/passwordUtils.js')

const loginFailure = (req, res) =>{
  res.status(StatusCodes.FORBIDDEN).json({
    'err': 'Incorrect email or password'
  })
}


const loginSuccess = (req, res) => { 
  console.log(req.session);
  res.status(StatusCodes.OK).json({
    "msg": {
      "primaryMsg": "Login Successful",
      "secondaryMsg": "please wait a moment while we retrieve your files"
    }, 
    'route': 'dashboard'
  })
}


const loginStatus = (req, res) =>{
  if(req.isAuthenticated)
    res.status(StatusCodes.OK).json({'isAuthenticated': req.isAuthenticated()})
  else
    res.status(StatusCodes.UNAUTHORIZED).json({"err": "something went wrong with passport js"})
}

const logout = (req, res) =>{ 
  // req.session.passport.user.LoggedIn = false
  req.logOut()
  req.session.destroy()
  res.status(StatusCodes.OK).json({'route': 'welcome'})
}


/** 
 * @todo implement register admin user functionality 
 * 
 * @route POST api/v2/user/register
 * @returns http status code (409 || 201) and json msg
 * @summary hash password using genPassword function, then adds user details to the database
 * @description
 *          if successful return 201 and success custom mgs
 *          checks if email already exist, if TRUE, return Conflict status code  with custom msg <check model schema>
*/
const register = async (req, res) => {
  const hash = await genPassword(req.body.pwd)
  const newUser = new User({
    email: req.body.email,
    hash: hash
  })
  newUser.save()
    .then(_ => res.status(StatusCodes.CREATED).json({"msg": 'registration success'}))
    .catch(err => {
      res.status(StatusCodes.CONFLICT).json({"err": err.errors.email.message})
    })
}

const controller = {register, loginFailure, loginSuccess, loginStatus, logout}
module.exports = {controller}
