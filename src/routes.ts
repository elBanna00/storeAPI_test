import express, { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.get("/healthz", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
};
// const routes = express.Router();

// routes.route("/").get((req: Request, res: Response) => {
//   res.sendStatus(200);
// });
export default routes;
