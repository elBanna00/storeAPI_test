import mongoose, { MongooseDocumentMiddleware } from "mongoose";
import bcrypt from "bcrypt";
import { StringIterator } from "lodash";
import config from "config";

export interface UserInput {
  email?: string;
  name?: string;
  password?: string;
}
export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async function <UserDocument>(
  candidatePassword: string
): Promise<boolean> {
  const user = this;

  return bcrypt.compare(candidatePassword, user.password).catch((err) => false);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
