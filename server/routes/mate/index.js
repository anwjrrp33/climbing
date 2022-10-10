const express = require('express');
const router = express.Router();
const Mate = require('./mate');

router.get('/mate', Mate.list);
router.post('/mate', Mate.register);

module.exports = router;