import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    phoneNumber: String,
    picturePath: String,
    userPicturePath: String,
    password: String,
    case: { type: "ObjectId", ref: "Case" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
