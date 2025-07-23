import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  sku: String,
  price: Number,
  stock: Number,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  variants: [variantSchema],
  tags: [String],
});

export default mongoose.model('Product', productSchema);
