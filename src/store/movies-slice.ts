import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../types/movies-types';
import { useGetCurrentDay } from '../Hooks/useGetCurrentDay';

const { currentDay, days } = useGetCurrentDay();

const initialState: {
  moviesData: { results: Movie[] };
  currentDay: string;
} = {
  moviesData: { results: [] },
  currentDay: days[currentDay],
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
