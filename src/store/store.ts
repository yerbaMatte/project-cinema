import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../Store/auth-slice';
import { moviesSlice } from './movies-slice';

export const store = configureStore({
  reducer: { auth: authSlice.reducer, movies: moviesSlice.reducer },
});

// export entire redux type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
