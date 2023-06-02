import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {State} from './types';

const INITIAL_STATE: State = {
  data: [
    {
      id: 0,
      username: '',
      created_datetime: '',
      title: '',
      content: '',
    },
  ],
};

export const fetchData = createAsyncThunk('', async () => {
  const res = await fetch('https://dev.codeleap.co.uk/careers/', {
    method: 'GET',
  });
  return res.json();
});

const mainSlice = createSlice({
  name: 'main',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const data = action.payload;
      state.data = data.results;
    });
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
