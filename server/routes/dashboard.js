const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/dashboard')
const {checkLoggedIn, validRoute}  = require('../middleware/authentication')

/** @route /api/v2/dashboard */
router.get('/cards', checkLoggedIn, controller.fetchCards)


module.exports = router