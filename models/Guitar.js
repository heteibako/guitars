const mongoose = require('mongoose');
const slugify = require('slugify');
const GuitarSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  strings: {
    type: Number,
  },
  body: {
    type: String,
  },
  neck: { type: String },
  neckProfile: { type: String },
  pickups: { type: String },
  slug: { type: String, slug: 'title', unique: true },
});

GuitarSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true, replacement: '-' });
  next();
});

//module.exports = Guitar = mongoose.module('Guitar', GuitarSchema);
module.exports = mongoose.models.Guitar || mongoose.model('Guitar', GuitarSchema);
