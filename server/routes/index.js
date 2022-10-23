const router = require('express').Router();

const homeRouter = require('./home');
const mateRouter = require('./mate');
const mateCommentRouter = require('./mateComment');
const oauth = require('./oauth');

router.use('/',  homeRouter); //home 화면
router.use('/', mateRouter); // 커뮤니티 - 메이트
router.use('/', mateCommentRouter); // 커뮤니티 - 메이트 댓글
router.use('/', oauth); // 소셜로그인

module.exports = router;