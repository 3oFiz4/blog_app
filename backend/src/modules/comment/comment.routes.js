import express from "express";
import { getAllComments, createComment } from "./comment.controller.js";

const router = express.Router();

router.get("/", getAllComments);
router.post("/comment", createComment);

export default router;
