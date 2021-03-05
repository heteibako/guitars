const mongoose = require('mongoose');

const GuitarSchema = new mongoose.Schema({
  name: String,
  strings: Number,
  body: String,
  neck: String,
  neckProfile: String,
  pickups: String,
});

// module.exports = mongoose.module('Guitar', GuitarSchema);
module.exports = mongoose.models.Guitar || mongoose.model('Guitar', GuitarSchema);
