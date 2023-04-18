import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});

// export entire redux type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
