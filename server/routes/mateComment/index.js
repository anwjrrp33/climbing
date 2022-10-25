const express = require('express');
const router = express.Router();
const MateComment = require('./mateComment');
const middleware = require('../middleware/middleware');

router.get('/mateComment/:mateId', MateComment.list);
router.get('/mateComment/:mateId/:parentId', MateComment.parentList);
router.post('/mateComment/:mateId', middleware, MateComment.register);
router.put('/mateComment/:mateId/:id', middleware, MateComment.modify);
router.delete('/mateComment/:mateId/:id', middleware, MateComment.remove);

module.exports = router;