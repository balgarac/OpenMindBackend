const express = require('express');
const router = express.Router();

const controller = require('./auth.controller');

router.post('/listener/signin', );
router.post('/listener/signup', controller.listenerSignup);
router.post('/talker/signin', );
router.post('/talker/signup', );

module.exports = router;