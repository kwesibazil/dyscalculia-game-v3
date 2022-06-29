const express = require('express')
const router = express.Router()

const { controller } = require('../controllers/quiz')
const {checkLoggedIn}  = require('../middleware/authentication')


/** @route /api/v2/quiz*/
router.get('/quiz',  checkLoggedIn, controller.fetchQuiz)
router.post('/answers', checkLoggedIn, controller.calculateScore)
module.exports = router