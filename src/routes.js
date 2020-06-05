const router = require('express').Router();
const sample = require('./controllers/sample');
const auth = require('./controllers/security');

router.use('/sample', sample);
router.use('/authentication', auth);

module.exports = router;