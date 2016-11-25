/**
 * Created by Nesta on 24/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DisponibilitySchema = new Schema({
    beginDate: {
        type: Date,
        required: true
    },
    endingDate: {
        type: Date,
        required: true
    },
    hours: {
        morning: {
            beginHours: {
                type: String,
                required: true
            },
            endingHours: {
                type: String,
                required: true
            }
        },
        afternoon: {
            beginHours: {
                type: String,
                required: true
            },
            endingHours: {
                type: String,
                required: true
            }
        },
    },
    day: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
    }
});

module.exports = mongoose.model('Disponibility', DisponibilitySchema);