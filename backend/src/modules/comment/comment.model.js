import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: false,
    default: "Anonymous",
  },
  title: {
    type: String,
    required: false,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rating: Number,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
