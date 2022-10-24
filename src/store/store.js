import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLoginReducer from './loginInfor';

const reducer = combineReducers({
  loginInfor: userLoginReducer,
});

export const store = configureStore({ reducer });
