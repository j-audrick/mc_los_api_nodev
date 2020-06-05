const TAG = '[HELPERS/JWT]';
const jwt = require('jsonwebtoken');
const logger = require('../logger')
const secret = process.env.ENCRYPTION_KEY;

module.exports.validateJWT = token => {
  const ACTION = '[validateJwt]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, function(err, decoded){
      if (err) {
        reject(err);
      }
      resolve(decoded);
    })
  })
  
}

module.exports.generateToken = data => {
  const ACTION = '[generateToken]';
  logger.log('info', `${TAG}${ACTION}`);
  
  return new Promise((resolve, reject) => {
    var token = jwt.sign(data, secret, { expiresIn: 60 * 60 });
    resolve(token);
  })
  
}