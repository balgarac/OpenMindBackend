const express = require('express');
const router = express.Router();

const controller = require('./listener.controller');

router.get('/listener', controller.listener);

module.exports = router;