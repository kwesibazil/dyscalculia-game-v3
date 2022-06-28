const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/games')
const {checkLoggedIn, validRoute}  = require('../middleware/authentication')

/** @route /api/v2/games */
router.get('/games-info', checkLoggedIn, controller.fetchGames)
router.get('/testimonies', checkLoggedIn, controller.fetchTestimonies)


module.exports = router