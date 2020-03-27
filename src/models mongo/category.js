import mongoose from 'mongoose'
let Schema = mongoose.Schema

const categorySchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;