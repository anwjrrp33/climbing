const router = require('express').Router();

const homeRouter = require('./home');
const mateRouter = require('./mate');
const mateCommentRouter = require('./mateComment');

router.use('/',  homeRouter); //home 화면
router.use('/', mateRouter); // 커뮤니티 - 메이트
router.use('/', mateCommentRouter); // 커뮤니티 - 메이트 댓글

module.exports = router;