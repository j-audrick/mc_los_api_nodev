const router = require('express').Router();
const Sample = require('../models/sample');
const validate = require('../middlewares/validate');
const sampleValidationRules = require('../validators/sample');
const { response, SUCCESS, CREATED, INVALID_TOKEN, UNAUTHORIZED } = require('../core/response');
const jwt = require('../core/helpers/jwt');

router.get('/', sampleValidationRules.sampleGet, validate, (req, res) => {
  let token = req.headers.authtoken;
  
  jwt.validateJWT(token)
  .then(r => {
    Sample.sampleGet()
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    }).catch(err => {
      res.error(err);
    });
  }).catch(e => {
    res.error(response(INVALID_TOKEN,'',e));
  })

})
module.exports = router;
