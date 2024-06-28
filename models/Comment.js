const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    creationTime: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Comment', CommentSchema);