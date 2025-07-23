import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
  image: String,
  link: String,
});

export default mongoose.model('Banner', bannerSchema);
