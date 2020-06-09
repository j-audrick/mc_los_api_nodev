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

module.exports.getUserTokenDetails = (sysid) => {
  const ACTION = '[getUserTokenDetails]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db.select(['ua.SysId', 'upm.Policy', 'urm.Role']).from('user_account as ua')
    .innerJoin('user_policy_mapping as upm','ua.SysId', 'upm.UserId')
    .innerJoin('user_role_mapping as urm','ua.SysId','urm.UserId')
    .where('ua.SysId', sysid)
    .then(rows => {
      resolve(rows);
    }).catch(e => {
      reject(e);
    })
  })
}