const express = require('express')
const router = express.Router()

const { controller } = require('../controllers/screener')
const {checkLoggedIn, validRoute}  = require('../middleware/authentication')

/** @route /api/v2/screener*/
router.get('/questions', checkLoggedIn, controller.fetchQuestions)


module.exports = router