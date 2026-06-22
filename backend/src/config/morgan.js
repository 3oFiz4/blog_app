import morgan from "morgan";
import chalk from "chalk";

//TODO: Fix status has no color when HTTP Request is emitted.
export default function statusColor(req, res) {
  const status = res.statusCode;

  // Define colors based on HTTP status
  if (status >= 500) return chalk.red(status); // Server Errors
  if (status >= 400) return chalk.yellow(status); // Client Errors
  if (status >= 300) return chalk.cyan(status); // Redirects
  if (status >= 200) return chalk.green(status); // Success
  return chalk.white(status);
}
