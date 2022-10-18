import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '../serverUrl';

const initialState = {
  muscle: [],
  loader: false,
};

export const fetchMuscle = createAsyncThunk(
  "fetch/muscle",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/muscle`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addMuscle = createAsyncThunk(
  "add/muscle",
  async ({ name, description }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/muscle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const muscleSlice = createSlice({
  name: "muscle",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      ////////////////FETCH-MUSCLE/////////////////
      .addCase(fetchMuscle.fulfilled, (state, action) => {
        state.muscle = action.payload;
        state.loader = false;
      })
      .addCase(fetchMuscle.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchMuscle.rejected, (state, action) => {
        state.muscle = action.payload;
        state.loader = false;
      })
      ////////////////ADD-MUSCLE//////////////////
      .addCase(addMuscle.fulfilled, (state, action) => {
        state.muscle.push(action.payload);
        state.loader = false;
      })
      .addCase(addMuscle.pending, (state) => {
        state.loader = true;
      })
      .addCase(addMuscle.rejected, (state, action) => {
        state.muscle.push(action.payload);
        state.loader = false;
      }),
});

export const { saveMuscle } = muscleSlice.actions;

export default muscleSlice.reducer;
