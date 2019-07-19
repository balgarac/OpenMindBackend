const express = require('express');
const router = express.Router();

const controller = require('./talker.controller');

router.get('/talker', controller.talker);