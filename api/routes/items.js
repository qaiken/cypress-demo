var express = require('express');
var router = express.Router();

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.send([{ id: 1, title: 'PS4' }, { id: 2, title: 'Switch' }]);
});

module.exports = router;
