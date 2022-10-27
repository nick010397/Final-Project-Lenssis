import { configureStore } from '@reduxjs/toolkit';
import userLoginReducer from './loginInfor';

export const store = configureStore({
  reducer: userLoginReducer,
});
