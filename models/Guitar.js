const mongoose = require('mongoose');
const slugify = require('slugify');
const GuitarSchema = new mongoose.Schema({
  name: String,
  strings: Number,
  body: String,
  neck: String,
  neckProfile: String,
  pickups: String,
  slug: { type: String, slug: 'title', unique: true },
});

GuitarSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true, replacement: '-' });
  next();
});

// module.exports = mongoose.module('Guitar', GuitarSchema);
module.exports = mongoose.models.Guitar || mongoose.model('Guitar', GuitarSchema);
