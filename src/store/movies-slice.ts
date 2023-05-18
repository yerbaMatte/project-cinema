import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../types/movies-types';
import { useGetCurrentDay } from '../Hooks/useGetCurrentDay';

const initialState: {
  moviesData: Record<number, Movie>;
} = {
  moviesData: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    addData(state, action) {
      const { key, value } = action.payload;
      state.moviesData[key] = value;
    },
  },
});

export const moviesActions = moviesSlice.actions;
