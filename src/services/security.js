const TAG = '[SERVICES/USERS]';
const logger = require('../core/logger');
const Users = require('../models/users');
const JWT = require('../core/helpers/jwt');

module.exports.generateToken = async data => {
  const ACTION = '[generateToken]';
  logger.log('info', `${TAG}${ACTION}`);

  let userDetails = await Users.getUserDetails(data.email, data.password);
  let token = JWT.generateToken(data);
  if(userDetails.length > 0){
    return token;
  }else{
    return null;
  }
}