const express = require('express')
const router = express.Router()

const { controller } = require('../controllers/quiz')
const {checkLoggedIn, validRoute}  = require('../middleware/authentication')

//validateTestResults,


/** @route /api/v2/quiz*/
router.get('/quiz',  checkLoggedIn, controller.fetchQuiz)

module.exports = router