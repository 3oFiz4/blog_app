import mongoose from "mongoose";
import { env } from "./env.js";
import chalk from "chalk";

export default async function connectDB() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log(chalk.green("[OK] connectDB success"));
  } catch (e) {
    console.log(chalk.red("[ERR] connectDB fail"));
  }
}
