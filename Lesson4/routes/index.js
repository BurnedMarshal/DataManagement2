var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {message: 'Mio Messaggio renderizzato!'});
})

module.exports = router
