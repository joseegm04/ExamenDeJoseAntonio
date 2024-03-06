var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.redirect("/personaje/mosaico");
  } catch (error) {
    res.status(500).send("Error");
  }
});

module.exports = router;
