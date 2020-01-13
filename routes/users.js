var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json({
    success: false,
    data: 111
  })
});

module.exports = router;
