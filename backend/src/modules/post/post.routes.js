import express from "express";

const router = express.Router();

// This is temporary for testing
const createPost = (req, res) => {
  res.status(200).send("Post created.");
};
const getPostById = (req, res) => {
  res.status(200).send("getPostById");
};
const getAllPosts = (req, res) => {
  res.status(200).send("getAllPosts");
};
const updatePostById = (req, res) => {
  res.status(200).send("updatePostById");
};
const deletePostById = (req, res) => {
  res.status(200).send("deletePostById");
};

router.post("/", createPost);
router.get("/:id", getPostById);
router.get("/", getAllPosts);
router.put("/:id", updatePostById);
router.delete("/:id", deletePostById);

export default router;
