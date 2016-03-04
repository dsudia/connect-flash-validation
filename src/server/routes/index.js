var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  console.log(req.body.email);
});

module.exports = router;
