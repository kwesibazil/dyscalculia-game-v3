const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/dashboard')
const {checkLoggedIn, validRoute}  = require('../middleware/authentication')

/** @route /api/v2/dashboard */
router.get('/games', checkLoggedIn, controller.fetchGames)
router.get('/testimonies', checkLoggedIn, controller.fetchTestimonies)


module.exports = router