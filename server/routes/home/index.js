const router = require('express').Router();
const main = require('./main.js')
const search = require('./search')


router.get('/', main)
router.get('/search', search)



module.exports = router;