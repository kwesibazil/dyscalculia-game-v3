const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/users')
const {validateRegistration, validateLogin} = require('../middleware/validation')
const passport = require('passport')
const {checkLoggedIn}  = require('../middleware/authentication')

/** @route /api/v2/users */
router.get('/home', controller.home)
router.get('/logout', controller.logout)
router.get('/landing', controller.landing)
router.get('/login-success', controller.loginSuccess)
router.get('/login-failure', controller.loginFailure)
router.post('/login',  validateLogin, passport.authenticate('local', {failureRedirect: 'login-failure', successRedirect: 'login-success'}))
router.post('/register', validateRegistration, controller.register)

// router.post('/login', checkLoggedIn, validateLogin, passport.authenticate('local', {failureRedirect: 'login-failure', successRedirect: 'login-success'}))
// router.post('/register', checkLoggedIn, validateRegistration, controller.register)


module.exports = router