import {CaseReducer, createSlice} from '@reduxjs/toolkit';
import {State, setNameAction} from './types';

const INITIAL_STATE: State = {
  name: '',
};

const setName: CaseReducer<State, setNameAction> = (state, action) => {
  state.name = action.payload;
};

const signupSlice = createSlice({
  name: 'signup',
  initialState: INITIAL_STATE,
  reducers: {
    setName,
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;
