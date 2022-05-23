const Card = require('../models/card')
const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchCards = async (req, res) =>{
  console.log('in cards controller');
  const result = await Card.find({}).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}



const controller = {fetchCards}
module.exports = {controller}
