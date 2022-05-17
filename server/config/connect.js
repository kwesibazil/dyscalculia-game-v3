require('dotenv').config();
const mongoose = require('mongoose');
const {ConnectError} = require('../errors');


const connect = mongoose.connect(process.env.DEVELOPMENT_DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(conn => conn.connection.getClient())
  .catch(err => {throw new ConnectError(err.message)})


module.exports = {connect};

//implement -- https://stackoverflow.com/questions/30966946/how-to-check-if-db-exists-during-mongodb-connection-using-mongoose-connect#:~:text=message%20is%20returned.-,mongoose.,existence%20of%20a%20particular%20database.&text=Same%20issue%20with%20me..%20it,Any%20solution%20for%20it%3F