const express = require('express');
const router = express.Router();

const controller = require('./auth.controller');
const phoneAuthController = require('./phone.auth.controller');

router.post('/listener/signin', controller.listenerSignin);
router.post('/listener/signup', controller.listenerSignup);
router.post('/talker/signin', controller.talkerSignin);
router.post('/talker/signup', controller.talkerSignup);
// router.post('/phoneAuth', phoneAuthController.smsVerification);

module.exports = router;