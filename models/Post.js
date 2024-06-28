const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    subRAHdit: {type: mongoose.Schema.Types.ObjectId, ref: 'subRAHdit'},
    creationTime: {type: Date, default: Date.now()},
    upVotes: {type: Number, default: 0},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);
