import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogIn: false,
};

export const userLoginInforSlice = createSlice({
  name: 'userLoginInfor',
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.isLogIn = action.payload.login;
    },
  },
});

export const { setLogIn } = userLoginInforSlice.actions;

export default userLoginInforSlice.reducer;
