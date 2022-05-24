//dependencies
require('dotenv').config()
require('express-async-errors')

const cors = require('cors')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const {corsOptions} = require('./config/cors')
const {sessionOptions} = require('./config/session')
const morgan = require('morgan')

const server = express()

// //global middleware
server.use(express.json());
server.use(morgan('dev'))
server.use(cors(corsOptions))
server.use(session(sessionOptions))

//passport setup
require('./config/passport') //must come after session setup, since Passport relies on the `express-session` 
server.use(passport.initialize()) //on each request, checks if req.session.passport.user object exist, then save it to internal Passport method for later.
server.use(passport.session())  //uses the user property found on req.session.passport.user to re-initialize user via the passport.deserializeUser() 
                                //then assigned the user object to the `req` object` to be can be accessed within the route 

//routes
server.use('/api/v2/users', require('./routes/auth'))
server.use('/api/v2/dashboard', require('./routes/dashboard'))

//404 Error && error handling
server.use(require('./middleware/not-found'))
server.use(require('./middleware/error-handler'))

server.listen(process.env.PORT || 3030, err => {
  if(err)console.log(`Internal Server Error ${err.message}`)
  console.log(`\nServer running on DEV-PORT 3030 || PROD-Port ${process.env.PORT}`)
})
