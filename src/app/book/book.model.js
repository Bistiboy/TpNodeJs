// UTILISÉ POUR LE TP2

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    description: String,
    publicationDate: Number,
    authors: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
    ]
});

const model = mongoose.model('Book', schema);

module.exports = model;