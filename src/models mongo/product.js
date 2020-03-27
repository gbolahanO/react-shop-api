import mongoose from 'mongoose'
let Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;