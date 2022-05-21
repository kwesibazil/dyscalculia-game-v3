const bcrypt = require('bcrypt')
const saltRounds = 10

const genPassword = (pwd) => bcrypt.hash(pwd, saltRounds)

/**
 * @todo      research into a solution for bcrypt async
 * @description bcrypt compare (the async version)  returns a promise 
 *              which doesn't evaluate to true/false --- instead its returns a pending promise
 *             even with async/await for some strange reason
 */
const validPassword = (pwd, hash) => bcrypt.compareSync(pwd, hash)      
                                                                                                                                              
module.exports = {genPassword,validPassword}
