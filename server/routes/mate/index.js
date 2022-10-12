const express = require('express');
const router = express.Router();
const Mate = require('./mate');

router.get('/mate', Mate.list);
router.post('/mate', Mate.register);
router.get('/mate/:id', Mate.read);
router.put('/mate/:id', Mate.modify);
router.delete('/mate/:id', Mate.remove);

module.exports = router;