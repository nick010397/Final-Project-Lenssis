import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSignupReducer from './signupInfor';
import userLoginReducer from './loginInfor';

const reducer = combineReducers({
  signupInfor: userSignupReducer,
  loginInfor: userLoginReducer,
});

export const store = configureStore({ reducer });
