/**
 * Created by Nesta on 25/11/2016.
 */

var User = require('../models/user');
var Housing = require('../models/housing/housing');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

module.exports = {
    addHousing: function(token, housing, callback){
        var decodedToken = jwt.decode(token);
        User.findOne({_id:decodedToken.id}, function(err, user) {
            if (err) throw err;

            if (!user) {
                res.send({
                    success: false,
                    msg: 'User not found.'
                });
            } else {
                var housing = new Housing({
                    title: housing.title,
                    adress: {
                        street:housing.street,
                        additional: housing.additional,
                        city:housing.city,
                        postalCode:housing.postalCode
                    },
                    capacity: housing.capacity,
                    size: housing.size,
                    equipment: housing.equipment,
                    photos: housing.photos,
                    description: housing.description,
                    available: housing.available,
                    disponibility: housing.disponibility,
                });

                user.housing.push(housing);

                user.save(function(err) {
                    if (err) {
                        callback({
                            success: false,
                            msg: 'Error when adding housing to user'
                        });
                        return
                    }
                    Housing.findOne({
                        _id: housing._id
                    }, function(err, house) {
                        if (err) throw err;

                        if (!house) {
                            callback({
                                success: false,
                                msg: 'Housing not found.'
                            });
                        } else {
                            callback({
                                success: true,
                                msg: 'Successful created new housing.',
                                auth_token: token,
                                housing: house
                            });
                        }
                    })

                });
            }
        });
    }
}