import express from "express";
import { env } from "../config/env.js";
import chalk from "chalk";
import morgan from "morgan";
import statusColor from "../config/morgan.js";
import authRoutes from "../modules/auth/auth.routes.js";
import commentRoutes from "../modules/comment/comment.routes.js";
import postRoutes from "../modules/post/post.routes.js";
import connectDB from "../config/db.js";
import rateLimiter from "../shared/middleware/rateLimiter.js";
import cors from "cors";

// Init
const app = express();
morgan.token("statusColor", statusColor);

connectDB();
// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json()); // Content-Type: application/json
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms"),
);
app.use(rateLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/post", postRoutes);

// Listen
app.listen(env.PORT, () => {
  console.log(chalk.green("Port open at") + chalk.yellow(` ${env.PORT}`));
});
