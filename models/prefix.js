const {Schema, model } = require("mongoose");

module.exports = model('prefix', new Schema({
    guildID: {
        type: String,
        required: true
    },
    prefix: {
        type: String,
        required: true
    }
}));