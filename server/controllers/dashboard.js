const Game = require('../models/game')
const Testimony = require('../models/testimony')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')

const fetchGames = async (req, res) =>{
  console.log(req.isAuthenticated())
  console.log(`in games the body should be empty`)
  console.log(req.body);

  const result = await Game.find({}).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}

const fetchTestimonies = async (req, res) =>{
  console.log(req.isAuthenticated());
  console.log(`in Testimony the body should be empty`);
  console.log(req.body);

  const result = await Testimony.find({}).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)  
}



const controller = {fetchGames, fetchTestimonies}
module.exports = {controller}
