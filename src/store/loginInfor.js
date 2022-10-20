import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginId: '',
  password: '',
};

export const userLoginInforSlice = createSlice({
  name: 'userLoginInfor',
  initialState,
  reducers: {
    setLoginInfor: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state[name] = value;
    },
    resetLoginInfor: () => initialState,
  },
});

export const { setLoginInfor, resetLoginInfor } = userLoginInforSlice.actions;

export default userLoginInforSlice.reducer;
