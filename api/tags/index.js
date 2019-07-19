const express = require('express');
const router = express.Router();

const controller = require('./tags.controller');

router.get('/tagList', controller.tagList);

module.exports = router;