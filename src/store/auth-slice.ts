import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setLoggedStatus(state, actions) {
      state.isLoggedIn = !state.isLoggedIn;
      state.name = actions.payload;

      state.isLoggedIn ? console.log('Logged in') : console.log('Logged out');
    },
  },
});

export const signActions = authSlice.actions;
