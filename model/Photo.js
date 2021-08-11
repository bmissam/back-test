const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    Title: { type: String },
    src: { type: String },
  
});

module.exports = mongoose.model('Photo', PhotoSchema);

