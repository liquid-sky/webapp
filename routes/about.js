var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About me' });
});

module.exports = router;
