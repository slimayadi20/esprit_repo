const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatieresSchema = new Schema({
    niveau: {
        type: String,

    }
});

module.exports = mongoose.model('Matieres', MatieresSchema);