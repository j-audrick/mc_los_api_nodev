const router = require('express').Router();
const Security = require('../services/security');
const validate = require('../middlewares/validate');
const securityValidationRules = require('../validators/security');
const { response, SUCCESS, CREATED, INVALID_CREDENTIALS } = require('../core/response');

router.post('/getToken', securityValidationRules.getToken, validate, (req, res) => {
  Security.generateToken(req.body)
  .then(data => {
    if(!data){
      res.error(response(INVALID_CREDENTIALS));
    }else{
      return res.success(response(SUCCESS, '', data));
    }
  }).catch(err => {
    res.error(err);
  })
})

module.exports = router;