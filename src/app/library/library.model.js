// UTILISÉ POUR LE TP2

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});
schema.index({ location: '2dsphere' });

const model = mongoose.model('Library', schema);

module.exports = model;
