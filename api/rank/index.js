const express = require('express');
const router = express.Router();

const controller = require('./rank.controller');

router.get('/raking', controller.ranking);

module.exports = router;