import express from "express";
import { env } from "../config/env.js";
import chalk from "chalk";
import morgan from "morgan";

// Init
const app = express();
morgan.token("statusColor", (req, res) => {
  const status = res.statusCode;

  // Define colors based on HTTP status
  if (status >= 500) return chalk.red(status); // Server Errors
  if (status >= 400) return chalk.yellow(status); // Client Errors
  if (status >= 300) return chalk.cyan(status); // Redirects
  if (status >= 200) return chalk.green(status); // Success
  return chalk.white(status);
});

// Middleware
app.use(express.json()); // Content-Type: application/json
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Listen
app.listen(env.PORT, () => {
  console.log(chalk.green("Port open at") + chalk.yellow(` ${env.PORT}`));
});
