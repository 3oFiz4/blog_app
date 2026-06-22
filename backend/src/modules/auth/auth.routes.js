import express from "express";

const router = express.Router();

// This is temporary for testing
const login = (req, res) => {
  res.status(200).send("Login");
};
const logout = (req, res) => {
  res.status(200).send("Logout");
};

router.post("/login", login);
router.post("/logout", logout);

export default router;
