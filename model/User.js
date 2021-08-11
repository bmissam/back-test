const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: { type: String  },
    Surname: { type: String },
    BirthPlace: { type: String },
    BirthYear: { type: Number },

});

module.exports = mongoose.model('User', UserSchema);

