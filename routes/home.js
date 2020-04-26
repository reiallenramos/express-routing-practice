var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.json({ message: 'Home!', data: null })
});

module.exports = router;
