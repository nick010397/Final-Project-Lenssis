import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginId: '',
  password: '',
  email: '',
  username: '',
  birthday: '2000-10-05',
  gender: 'X',
  phone: '010-1234-5678',
};

export const userSignupSlice = createSlice({
  name: 'userSingupInfor',
  initialState,
  reducers: {
    setInfor: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state[name] = value;
    },
    reset: () => initialState,
  },
});

export const { setInfor, reset } = userSignupSlice.actions;

export default userSignupSlice.reducer;
