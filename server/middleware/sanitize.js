/**
* @todo sanitize user input coming from the frontend
*/
const sanitize= (req, data)=> {
  req.body = data
  //console.log('******  !!!implement sanitize middleware!!!  ******');
}

module.exports = {sanitize}
