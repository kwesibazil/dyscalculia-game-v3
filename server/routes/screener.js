const express = require('express')
const router = express.Router()

const { controller } = require('../controllers/screener')
const {validateTestResults} = require('../middleware/validation')
const {checkLoggedIn, validRoute}  = require('../middleware/authentication')

//validateTestResults,


/** @route /api/v2/screener*/
router.get('/questions',  checkLoggedIn, controller.fetchQuestions)
router.post('/answers', checkLoggedIn, controller.testResults)

module.exports = router