var express = require('express');
var router = express.Router();

var eateries = require('../controllers/eateries');
router.get('/', eateries.index);
router.get('/:id', eateries.show);

module.exports = router;





//commented the below out
// router.get('/', function(req, res, next) {
//   res.render('eateries/list');
// });

// router.get('/3226', function(req, res, next) {
//   res.render('eateries/3226');
// });

// router.get('/5475', function(req, res, next) {
//   res.render('eateries/5475');
// });

// router.get('/9567', function(req, res, next) {
//   res.render('eateries/9567');
// });

// module.exports = router;
