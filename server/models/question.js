const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const QuestionSchema = new mongoose.Schema({
  title: {
    trim: true, 
    type: String,
    unique: true,
    required: true
  }
},{timestamps: true, collection: "questions"})


QuestionSchema.plugin(uniqueValidator, {message: 'sorry, question already exist.'})

module.exports = mongoose.model('Question', QuestionSchema)
