import express from "express";

const router = express.Router();

// This is temporary for testing
const getAllComments = (req, res) => {
  res.status(200).send("getAllComments");
};
const createComment = (req, res) => {
  res.status(200).send("Comment created.");
};

router.get("/", getAllComments);
router.post("/comment", createComment);

export default router;
