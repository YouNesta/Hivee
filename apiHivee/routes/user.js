var express = require('express');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var router = express.Router();
var config = require('../config/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/subscribe', function(req, res, next) {

  if (!req.body.user.firstName || !req.body.user.lastName || !req.body.password || !req.body.user.email) {
    console.log('err');
    res.json({
      success: false,
      msg: 'Please pass name, email and password.'
    });
  } else {
    var newUser = new User({
      email: req.body.user.email,
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      phone: req.body.user.phone,
      password: req.body.password
    });

    newUser.save(function(err) {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          msg: 'Username already exists.'
        });
      }
      User.findOne({
        email: req.body.user.email
      }, function(err, user) {
        if (err) throw err;

        if (!user) {
          res.send({
            success: false,
            msg: 'Authentication failed. User not found.'
          });
        } else {
          var token = jwt.sign(user._id, config.secret, { expiresIn:  60*60*24 });
          delete user.password;
          res.send({
            success: true,
            msg: 'Successful created new user.',
            auth_token: token,
            user: user
          });

        }
      })

    });
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
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;

      if (!user) {
        res.send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {

        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {

            var token = jwt.sign(user._id, config.secret, { expiresIn:  60*60*24 });

            res.json({
              success: true,
              msg: "Successful authenfication",
              auth_token: token,
              user: user
            });
          } else {
            res.send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    });
  }
});
module.exports = router;
