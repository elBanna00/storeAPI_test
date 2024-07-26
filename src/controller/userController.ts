import { Request, Response } from "express";
import log from "../utils/logger";
import { createUser } from "../service/userService";
import { CreateUserInput } from "../schema/userSchema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
