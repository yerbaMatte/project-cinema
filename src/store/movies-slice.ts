import { createSlice } from '@reduxjs/toolkit';

const date = new Date();
const currentDay = date.getDay() - 1;
const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const initialState: {
  moviesData: Object;
  currentDay: string;
} = {
  moviesData: {},
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
