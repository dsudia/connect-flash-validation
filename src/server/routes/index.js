var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

var email = [
  'dave@gmail.com',
];

router.get('/', function(req, res, next) {
  res.render('index', {messages: req.flash('danger')});
});

router.post('/', validEmail, function(req, res, next) {
  res.render('index');
});

function validEmail(req, res, next) {
  if (email.indexOf(req.body.email === -1)) {
    req.flash('danger', 'Invalid email, please try again');
    res.redirect('/');
  } else {
    return next();
  }
}

module.exports = router;
