const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/auth')
const {validateRegistration, validateLogin} = require('../middleware/validation')
const passport = require('passport')
const {checkLoggedIn}  = require('../middleware/authentication')

/** @route /api/v2/users */
router.get('/login-status', controller.loginStatus)
router.get('/login-success', controller.loginSuccess)
router.get('/login-failure', controller.loginFailure)
router.get('/logout',  checkLoggedIn, controller.logout)
router.post('/register', validateRegistration, controller.register)
router.post('/login',  validateLogin, passport.authenticate('local', { failureRedirect: 'login-failure', successRedirect: 'login-success'}))


module.exports = router