const mongoose = require("mongoose");
const { schema, model } = mongoose

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    summary: String,
    cover: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true,
});

const PostModel = model('Post', PostSchema)
module.exports = PostModel