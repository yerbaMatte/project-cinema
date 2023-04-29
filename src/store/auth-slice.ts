import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  name: '',
  isInitializing: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setLoggedIn(state, actions) {
      state.user = state.name = actions.payload;

      state.user ? console.log('Logged in') : console.log('Logged out');
    },
  },
});

export const signActions = authSlice.actions;
