/**
 * Created by Nesta on 24/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Housing = require('./housing/housing');
var Tenant = require('./user');



var RatingSchema = new Schema({
    rate:{
        type: Number,
        min: 0,
        max: 5
    }
});

var BookingSchema = new Schema({
    housing: {
        type: Schema.ObjectId,
        ref: 'Housing',
        required: true
    },
    tenant: {
        type: Schema.ObjectId,
        ref: 'Tenant',
        required: true
    },
    ratings:{
        tenantToHousing: RatingSchema,
        housingToTenant: RatingSchema
    },
    beginDate:{
        type: Date,
        required: true
    },
    endingDate:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Booking', BookingSchema);