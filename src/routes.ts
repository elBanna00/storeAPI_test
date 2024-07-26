import express, { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/userController";

const routes = (app: Express) => {
  app.get("/healthz", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/users", createUserHandler);
};
// const routes = express.Router();

// routes.route("/").get((req: Request, res: Response) => {
//   res.sendStatus(200);
// });
export default routes;
