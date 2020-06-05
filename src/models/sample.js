const TAG = '[MODELS/SAMPLE]';
const db = require('../core/database');
const logger = require('../core/logger');

module.exports.sampleGet = data => {
  const ACTION = '[sampleGet]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db.select('*').from('user_account')
    .then((rows) => {
      resolve(rows);
    }).catch((e) => {
      reject(e);
    })
  })
}

