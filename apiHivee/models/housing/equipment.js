/**
 * Created by Nesta on 24/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Equipment', EquipmentSchema);