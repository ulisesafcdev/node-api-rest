const express = require('express');
const router = express.Router();
const controlForward = require('../controllers/forwards.controller');
const controlMidfielder = require('../controllers/midfielders.controller');

router.get('/', controlForward.index);
router.get('/forwards', controlForward.forwards);
router.get('/midfielders', controlMidfielder.midfielders);

module.exports = router;