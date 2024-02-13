import mongoose from "mongoose";
import config from "config";
import logger from "./logger";
const connect = () => {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info("DB connected");
    })
    .catch((err) => {
      logger.error("Failed to Connect to DB");
      process.exit(1);
    });
};

export default connect;
