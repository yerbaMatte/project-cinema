import { createSlice } from '@reduxjs/toolkit';

interface UserAccProps {
  name: string | null;
  email: string | null;
}

const initialState: {
  userAcc: UserAccProps;
  isUserAccLoading: Boolean;
} = {
  userAcc: {
    name: null,
    email: null,
  },
  isUserAccLoading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.userAcc = action.payload;
    },
    setIsUserAccLoading(state, action) {
      state.isUserAccLoading = action.payload;
    },
  },
  // TODO: type action
});

export const signActions = authSlice.actions;
