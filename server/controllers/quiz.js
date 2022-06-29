const Quiz = require('../models/quizzes.js')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchQuiz = async (req, res) =>{
  const result = await Quiz.find({}).select(['-answer', '-_id']).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}


const calculateScore = async (req, res) =>{
  console.log('math quiz answers in controller');
  console.log(req.body);

  res.status(StatusCodes.OK).json({
    "msg": {
      "primaryMsg": "Thank you for your participation",
      "secondaryMsg": "please wait a moment while we calculate your results"
    }, 
    'route': 'math-results',
    'results': {
      name: 'mathQuizResults',
      msg: 'Testing math quiz results return',
      todo: 'chore: -- implement controller logic '
    }
  })
}



const controller = {fetchQuiz, calculateScore }
module.exports = {controller}


