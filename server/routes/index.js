const router = require('express').Router();




const homeRouter = require('./home')
const communityRouter = require('./mate')


router.use('/',  homeRouter); //home 화면
router.use('/', communityRouter); // 커뮤니티

 

module.exports = router;