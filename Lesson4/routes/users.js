var express = require('express');
var router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res, next) {
    User.find(function(err, users){
      res.json(users);
    });
})

router.get('/:id', function(req, res, next) {
    res.render('index', {});
})

router.post('/', function(req, res, next) {
    res.render('index', {});
})

router.put('/:id', function(req, res, next) {
    res.render('index', {});
})

router.delete('/:id', function(req, res, next) {
    res.render('index', {});
})

module.exports = router
