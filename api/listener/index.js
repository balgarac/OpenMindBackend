const express = require('express');
const router = express.Router();

const controller = require('./listener.controller');

router.get('/listener', controller.listener);
router.get('/listenerBytoken/:token', controller.listenerBytoken);

module.exports = router;