var express = require('express');
var router = express.Router();

var data = [
  {
    name: 'Bibi',
  },
  {
    name: 'Colt',
  },
  {
    name: 'Jessie',
  }
]

router.get('/', function(req, res, next) {
  return res.json({ message: 'Users Index', data: data });
});

router.get('/Bibi', function(req, res, next) {
  var name = req.originalUrl.split('/')[2];
  var user = data.filter(u => u.name == name);
  return res.json({ message: 'Users Show', data: user });
});

router.get('/Colt', function(req, res, next) {
  var name = req.originalUrl.split('/')[2];
  var user = data.filter(u => u.name == name);
  return res.json({ message: 'Users Show', data: user });
});

router.get('/Jessie', function(req, res, next) {
  var name = req.originalUrl.split('/')[2];
  var user = data.filter(u => u.name == name);
  return res.json({ message: 'Users Show', data: user });
});

module.exports = router;
