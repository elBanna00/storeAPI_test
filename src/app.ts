import config from "config";
import express from "express";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
const app = express();

const port = config.get<number>("port");

app.listen(port, async () => {
  logger.info(`App runing on http://localhost:${port}`);
  await connect();
  routes(app);
});

// app.use("/healthz", routes);
