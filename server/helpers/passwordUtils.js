const bcrypt = require('bcrypt')
const saltRounds = 10

const genPassword = async (pwd) => bcrypt.hash(pwd, saltRounds)
const validPassword = (pwd, hash) => bcrypt.compare(pwd, hash)
module.exports = {genPassword,validPassword}