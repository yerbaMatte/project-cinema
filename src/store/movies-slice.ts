import { createSlice } from '@reduxjs/toolkit';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

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
