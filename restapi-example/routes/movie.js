var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const data = req.body
  res.json(data);
});



module.exports = router;
