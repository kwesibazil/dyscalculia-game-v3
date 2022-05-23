const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/auth')
const {validateRegistration, validateLogin} = require('../middleware/validation')
const passport = require('passport')
const {checkLoggedIn}  = require('../middleware/authentication')

/** @route /api/v2/users */
router.get('/logout', controller.logout)
router.get('/login-success', controller.loginSuccess)
router.get('/login-failure', controller.loginFailure)
router.post('/register', validateRegistration, controller.register)
router.post('/login',  validateLogin, passport.authenticate('local', { failureRedirect: 'login-failure', successRedirect: 'login-success'}))

// router.post('/login', checkLoggedIn, validateLogin, passport.authenticate('local', {failureRedirect: 'login-failure', successRedirect: 'login-success'}))
// router.post('/register', checkLoggedIn, validateRegistration, controller.register)


module.exports = router