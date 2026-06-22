import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.port || 5001,
  MONGODB_URI: process.env.MONGODB_URI,
};
