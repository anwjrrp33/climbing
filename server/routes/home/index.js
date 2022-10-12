const router = require('express').Router();
const mainHome = require('./home');
const search = require('./search')



router.get('/',  mainHome)
router.get('/search', search)



module.exports = router;
