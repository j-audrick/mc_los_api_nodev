const logger = require('../core/logger');
const { uuid } = require('uuidv4');

module.exports = function() {
  return function(req, res, next) {
    res.success = function(response) {
      logger.log('info', `[${res.req.method}][${req.originalUrl}]`, response);
      res.status(response.status).json(response.body);
    };

    res.error = function(error) {
      const errorId = uuid();
      logger.log('error', `${errorId} [${res.req.method}][${req.originalUrl}]`, error);
      res.status(error.status).json({id: errorId, ...error.body});
    };

    next();
  };
};
