const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoursSchema = new Schema({
    name: {
        type: String,

    }
});

module.exports = mongoose.model('Cours', CoursSchema);