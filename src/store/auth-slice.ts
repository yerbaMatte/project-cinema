import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface UserAccProps {
  name: string | null;
  email: string | null;
}

const initialState: {
  userAcc: UserAccProps;
  isInit: Boolean;
} = {
  userAcc: {
    name: null,
    email: null,
  },
  isInit: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.userAcc = action.payload;
    },
  },
});

export const signActions = authSlice.actions;
