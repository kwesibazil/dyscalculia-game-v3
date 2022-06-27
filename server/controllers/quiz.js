const Quiz = require('../models/quizzes.js')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchQuiz = async (req, res) =>{
  const result = await Quiz.find({}).select(['-answer', '-_id']).limit()

  console.log(`this is the result of quiz in the controller ${result}`)



  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}



const controller = {fetchQuiz}
module.exports = {controller}


