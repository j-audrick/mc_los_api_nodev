const TAG = '[DB]';
const { env } = require('../../../config');
const config = require('../../../knex')[env];
const connection = require('knex')(config);
const logger = require('../logger');

connection.on('query', function(data) {
  console.time('query_time');
});

connection.on('query-response', ()=> {
  console.timeEnd('query_time');
})

connection.on('query-error', function(error) {
  logger.log('error', `${TAG}[ERROR] `, error);
});

module.exports = connection;
