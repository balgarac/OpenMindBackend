const express = require('express');
const router = express.Router();

const controller = require('./talker.controller');

router.get('/talker', controller.talker);
router.get('/talkerByTag', controller.talkerBytag);
router.get('/talkerBycategory/:cate', controller.talkerBycategory);
router.get('/talkerBytoken/:token', controller.talkerBytoken);
router.get('/incOpenCount/:token', controller.incOpenCount);

module.exports = router;