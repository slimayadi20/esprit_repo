const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatieresSchema = new Schema({
    name: {
        type: String,

    },
    photo: {
        type: String,

    },
    quantity: {
        type: Number,
    },
    id: {
        type: Number,
    },
    categories: {
        type: String,
    }

});

module.exports = mongoose.model('Matieres', MatieresSchema);