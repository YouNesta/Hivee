/**
 * Created by Nesta on 25/11/2016.
 */

var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

module.exports = {
    save: function(user, password, callback){
        var newUser = new User({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            password: password,
            birthdate : new Date(user.birthdate),
            sexe : user.sexe,
            description : user.description,
            city : user.city
        });
        newUser.save(function(err) {
            if (err) {
                callback({
                    success: false,
                    msg: 'Username already exists.'
                });
                return
            }
            User.findOne({
                email: user.email
            }, function(err, user) {
                if (err) throw err;

                if (!user) {
                    callback({
                        success: false,
                        msg: 'Authentication failed. User not found.'
                    });
                } else {
                    var token = jwt.sign(user._id, config.secret, { expiresIn:  60*60*24 });
                    delete user.password;
                    callback({
                        success: true,
                        msg: 'Successful created new user.',
                        auth_token: token,
                        user: user
                    });
                }
            })

        });
    },

    login: function(email, password, callback){
        User.findOne({
            email: email
        }, function(err, user) {
            if (err) throw err;

            if (!user) {
                callback({
                    success: false,
                    msg: 'Authentication failed. User not found.'
                });
            } else {
                user.comparePassword(password, function (err, isMatch) {
                    if (isMatch && !err) {

                        var token = jwt.sign(user._id, config.secret, { expiresIn:  60*60*24 });

                        callback({
                            success: true,
                            msg: "Successful authenfication",
                            auth_token: token,
                            user: user
                        });
                    } else {
                        callback({
                            success: false,
                            msg: 'Authentication failed. Wrong password.'
                        });
                    }
                });
            }
        });
    },
    getUser: function(token, callback){
        var decodedToken = jwt.decode(token);
        User.findOne({_id:decodedToken.id}, function(err, user) {
            if (err) throw err;

            if (!user) {
                callback({
                    success: false,
                    msg: 'User not found.'
                });
            } else {
                callback({
                    success: true,
                    msg: "Successful Get User",
                    user: user
                })
            }
        });
    }
}