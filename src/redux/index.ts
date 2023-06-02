import {configureStore} from '@reduxjs/toolkit';
import signup from './modules/signup/slice';
import main from './modules/main/slice';

export const store = configureStore({
  reducer: {
    signup,
    main,
  },
});

export type AppState = ReturnType<typeof store.getState>;
