const Question = require('../models/question.js')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchQuestions = async (req, res) =>{
  const result = await Question.find({}).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}


const controller = {fetchQuestions}
module.exports = {controller}
