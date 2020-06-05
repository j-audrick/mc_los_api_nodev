const TAG = '[MODELS/USERS]';
const db = require('../core/database');
const logger = require('../core/logger');

module.exports.getUserDetails = (email, pw) => {
  const ACTION = '[getUserDetails]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db.select('*').from('user_account').where('Email', email).andWhere('CurrentPassword', pw)
    .then((rows) => {
      resolve(rows);
    }).catch((e) => {
      reject(e);
    })
  })
}