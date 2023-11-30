import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
      lowercase: true,
    },
    surname: {
      type: String,
      required: [true, "Please tell us your Surname"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      // select: false,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/demawo/image/upload/v1669291651/avatar_rgc98s.png",
    },
    role: {
      type: String,
      enum: ["user", "judge", "admin"],
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
      default: "South Africa",
    },
    business_name: {
      type: String,
      default: "ABC Limited",
    },
    competition: {
      type: String,
      default: "emergent",
    },
    activateAccToken: String,
    activateAccTokenExpires: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    isEmailVerified: {
      type: Boolean,
      default: false,
      // select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
