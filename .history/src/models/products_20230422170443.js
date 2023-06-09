'use strict'
// this code here creates a new schema to application
//********************************************************* */
//            Importing the mongoose data bank
//********************************************************* */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//********************************************************* */
//         use the new mongoose schema
//********************************************************** */
const schema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        trim: true,
        index: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
});
///*********************************************************** */
//                  Exporting a new schema
//************************************************************* */
module.exports = mongoose.model('Productd', schema);