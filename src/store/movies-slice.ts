import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  moviesData: Object;
} = {
  moviesData: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.moviesData = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
