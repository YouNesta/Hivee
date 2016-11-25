/**
 * Created by Nesta on 24/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Equipment = require('./equipment');
var Disponibility = require('./disponibility');

var HousingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    adress: {
        street:{
            type:  String,
            required: true
        },
        additional: {
            type:  String
        },
        city:{
            type:  String
        },
        postalCode:{
            type:  Number,
            required: true
        }
    },
    capacity: {
        type: Number,
        min: 1,
        default: 1,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    equipment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' }],
    photos: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: false
    },
    disponibility: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disponibility' }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Housing', HousingSchema);