// UTILISÉ POUR LE TP2

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String
});

const model = mongoose.model('Author', schema);

module.exports = model;
