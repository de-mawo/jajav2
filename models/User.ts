import mongoose from "mongoose"
import validator from 'validator'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name'],
      },
      surname: {
        type: String,
        required: [true, 'Please tell us your Surname'],
      },
      email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
      },
      password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        // select: false,
      },
      image: {
        type: String,
        default:
          'https://res.cloudinary.com/demawo/image/upload/v1669291651/avatar_rgc98s.png',
      },
      role: {
        type: String,
        enum: ['user', 'judge', 'admin'],
        default: 'user',
      },
      root: {
        type: Boolean,
        default: false,
      },
      
      competition: {
        type: mongoose.Types.ObjectId,
        default: '2022',
      },
     
}, { timestamps: true} )

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;