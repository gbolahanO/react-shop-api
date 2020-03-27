import mongoose from 'mongoose'
let Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

export default User;