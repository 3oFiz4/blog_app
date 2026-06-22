import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 1000, // 1 seconds
  limit: 5, // 5 req per second
  standardHeaders: "draft-8",
  legacyHeaders: false,
  handler: (req, res, next) => {
    res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
  },
});

export default limiter;
