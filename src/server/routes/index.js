var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', validEmail, function(req, res, next) {
  res.render('index');
});

function validEmail(req, res, next) {
  if (email.indexOf(req.body.email === -1)) {
      res.send('you fucked up!');
  } else {
    return next();
  }
}

module.exports = router;
