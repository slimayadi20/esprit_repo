const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeedSchema = new Schema({
    name: {
        type: String,

    },
    messages: {
        type: String,
    }
});

module.exports = mongoose.model('Feed', FeedSchema);