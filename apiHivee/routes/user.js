var express = require('express');
var router = express.Router();

var UserModule = require('../modules/user');
var config = require('../config/config')
var jwtAuth = require('express-jwt');


router.post('/subscribe', function(req, res, next) {

  if (!req.body.user.firstName || !req.body.user.lastName || !req.body.password || !req.body.user.email) {
    res.json({
      success: false,
      msg: 'Please pass name, email and password.'
    });
  } else {
    UserModule.save(req.body.user, req.body.password, function(resp){
      console.log('kjwefdewkjfd')
      res.send(resp)
    })
  }

});

router.post('/login', function(req, res, next) {

  if (!req.body.password|| !req.body.email) {
    console.log('err');
    res.json({
      success: false,
      msg: 'Please pass email and password.'
    });
  }else{
    UserModule.login(req.body.email, req.body.password, function(resp){
      res.send(resp)
    })
  }
});


router.use(jwtAuth({ secret: config.secret}));
//Get User
router.get('/', function(req, res, next) {
  var token =  req.get('Authorization').replace("Bearer ", "");
    UserModule.getUser(token, function(resp){
      res.send(resp)
    })
});

module.exports = router;
