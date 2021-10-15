const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoursSchema = new Schema({

});

module.exports = mongoose.model('Cours', CoursSchema);