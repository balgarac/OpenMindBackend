const express = require('express');
const router = express.Router();

const controller = require('./auth.controller');

router.post('/listener/signin', controller.listenerSignin);
router.post('/listener/signup', controller.listenerSignup);
router.post('/talker/signin', controller.talkerSignin);
router.post('/talker/signup', controller.talkerSignup);

module.exports = router;