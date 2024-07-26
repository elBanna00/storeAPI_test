import DocumentDefinition from "mongoose";
import userModel, { UserDocument, UserInput } from "../models/userModel";

export async function createUser(inputDoc: UserInput) {
  try {
    return await userModel.create(inputDoc);
  } catch (e) {
    throw new Error(e);
  }
}
