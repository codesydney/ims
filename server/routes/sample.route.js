const router = require('express').Router();
const controller = require('../controller/sample.controller');

router.get('/', controller.hello);

module.exports = router;
