/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * type
 * default
 * required
 * unique
 */

const BookSchema = new Schema({
    title: String,
    published: {
        type: Boolean,
        default: false
    },
    comments: [{message: String}],
    meta: {
        votes: Number,
        favs: Number,
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('book',BookSchema)

