const router = require('express').Router();
const Sample = require('../models/sample');
const validate = require('../middlewares/validate');
const sampleValidationRules = require('../validators/sample');
const { response, SUCCESS, CREATED, INVALID_TOKEN, UNAUTHORIZED } = require('../core/response');

router.get('/', sampleValidationRules.sampleGet, validate, (req, res) => {
  Sample.sampleGet()
  .then(result => {
    return res.success(response(INVALID_TOKEN, '', result));
  }).catch(err => {
    res.error(err);
  });
})

module.exports = router;
