const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const GameSchema = new mongoose.Schema({
  title: {
    trim: true,
    index: true, 
    type: String,
    unique: true,
    required: true
  },
  img: {
    trim: true,
    type: String,
    required: true,
    default: 'http://drive.google.com/uc?export=view&id=1vpA77KIhwm_vAezpX1kbdFYhaoUgdUKw'
  },
  text: {
    trim: true,
    type: String,
    required: true
  },
  body: {
    trim: true,
    type: String,
    required: true,
  }
},{timestamps: true, collection: "games"})

GameSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Games', GameSchema)
