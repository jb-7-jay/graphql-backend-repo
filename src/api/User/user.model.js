import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
