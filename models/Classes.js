const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClassesSchema = new Schema({

});

module.exports = mongoose.model('Classes', ClassesSchema);