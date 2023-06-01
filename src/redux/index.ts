import {configureStore} from '@reduxjs/toolkit';
import signup from './modules/signup/slice';

export const store = configureStore({
  reducer: {
    signup,
  },
});

export type AppState = ReturnType<typeof store.getState>;
