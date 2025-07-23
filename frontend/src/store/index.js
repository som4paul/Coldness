import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import ordersReducer from './slices/ordersSlice';
import reviewsReducer from './slices/reviewsSlice';
import couponsReducer from './slices/couponsSlice';
import bannersReducer from './slices/bannersSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    reviews: reviewsReducer,
    coupons: couponsReducer,
    banners: bannersReducer,
  },
});
