const Question = require('../models/question.js')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchQuestions = async (req, res) =>{
  const result = await Question.find({}).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}

const testResults = async (req, res) =>{
  console.log(req.body);


  res.status(StatusCodes.OK).json({
    "msg": {
      "primaryMsg": "Thank you for your participation",
      "secondaryMsg": "please wait a moment while we calculate your results"
    }, 
    'route': 'screener-results',
    'results': {score: 'sample', percentage: 'sample', weakness: 'sample'}
  })
}

const controller = {fetchQuestions, testResults}
module.exports = {controller}


const loginSuccess = (req, res) => { 
  console.log(req.session);
  res.status(StatusCodes.OK).json({
    "msg": {
      "primaryMsg": "Welcome",
      "secondaryMsg": "please wait a moment while we retrieve your files"
    }, 
    'route': 'dashboard'
  })
}