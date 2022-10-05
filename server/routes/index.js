const router = require('express').Router();




const homeRouter = require('./home')
const communityRouter = require('./')


router.use('/',  homeRouter); //home 화면
router.use('/mate', communityRouter); // 커뮤니티

 

module.exports = router;