const Question = require('../models/question.js')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchQuestions = async (req, res) =>{
  const result = await Question.find({}).select(['-_id']).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}

const detection = async (req, res) =>{
  console.log('screener answers in controller');
  console.log(req.body);

  res.status(StatusCodes.OK).json({
    "msg": {
      "primaryMsg": "Thank you for your participation",
      "secondaryMsg": "please wait a moment while we determine your results"
    }, 
    'route': 'screener-results',
    'results': {
      name: 'screenerResults', 
      msg: 'Testing screener results return',
      todo: 'chore: -- implement controller logic '
    }
  })
}

const controller = {fetchQuestions, detection}
module.exports = {controller}

