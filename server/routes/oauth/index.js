const router = require('express').Router();
const kakao = require('./kakao');

router.get("/oauth/kakao/redirect", kakao.redirect);
router.get("/oauth/kakao/token", kakao.token);

module.exports = router;