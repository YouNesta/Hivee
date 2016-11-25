/**
 * Created by Nesta on 25/11/2016.
 */
var express = require('express');
var router = express.Router();
var config = require('../config/config')
var jwt = require('jsonwebtoken');
var jwtAuth = require('express-jwt');
var HousingModule = require('../modules/housing');





router.use(jwtAuth({ secret: config.secret}));

router.post('/add', function(req, res, next) {
    var token =  req.get('Authorization').replace("Bearer ", "");
    if (!token || !req.body.housing) {
        res.json({
            success: false,
            msg: 'Token or data missing'
        });
    } else {
        HousingModule.addHousing(token, req.body.housing, function(resp){
            res.send(resp)
        })
    }

});


module.exports = router;
