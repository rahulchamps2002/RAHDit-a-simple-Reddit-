const mongoose = require('mongoose')

const SubRAHditSchema = new mongoose.Schema ({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('SubRAHdit', SubRAHditSchema);