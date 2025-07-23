import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET,
  cloudinaryUrl: process.env.CLOUDINARY_URL,
  shiprocketKey: process.env.SHIPROCKET_API_KEY,
  shiprocketSecret: process.env.SHIPROCKET_API_SECRET,
};
