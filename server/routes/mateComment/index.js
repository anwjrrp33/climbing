const express = require('express');
const router = express.Router();
const MateComment = require('./mateComment');

router.get('/mateComment/:mateId', MateComment.list);
router.get('/mateComment/:mateId/:parentId', MateComment.parentList);
router.post('/mateComment/:mateId', MateComment.register);
router.put('/mateComment/:mateId/:id', MateComment.modify);
router.delete('/mateComment/:mateId/:id', MateComment.remove);

module.exports = router;