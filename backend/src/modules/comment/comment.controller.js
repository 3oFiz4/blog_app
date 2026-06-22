import Comment from "./comment.model.js";
import chalk from "chalk";

export async function getAllComments(req, res) {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createComment(req, res) {
  try {
    const { author, title, comment, rating } = req.body;
    const commentData = new Comment({
      author,
      title,
      comment,
      rating,
    });
    await commentData.save();
    res.status(200).json(commentData);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
