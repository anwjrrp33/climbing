const express = require('express');
const router = express.Router();
const Mate = require('./mate');
const middleware = require('../middleware/middleware');

router.get('/mate', Mate.list);
router.post('/mate', middleware, Mate.register);
router.get('/mate/:id', Mate.read);
router.put('/mate/:id', middleware, Mate.modify);
router.delete('/mate/:id', middleware, Mate.remove);

module.exports = router;