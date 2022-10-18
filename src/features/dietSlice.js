import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from '../serverUrl';

const initialState = {
  diet: [],
  loader: false,
};

export const fetchDiet = createAsyncThunk("fetch/diet", async (_, thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/diet`);
    const data = await res.json();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const addDiet = createAsyncThunk(
  "add/diet",
  async ({ name, description, product }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/diet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          product,
        }),
      });
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteDiet = createAsyncThunk(
  "delete/diet",
  async (id, thunkAPI) => {
    const res = await fetch(`${serverUrl}/diet${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  }
);

const dietSlice = createSlice({
  name: "diet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiet.fulfilled, (state, action) => {
        state.diet = action.payload;
        state.loader = false
      })
      .addCase(fetchDiet.pending, (state, action) => {
        state.loader = true
      })
      .addCase(addDiet.fulfilled, (state, action) => {
        state.diet.push(action.payload);
      })
      .addCase(deleteDiet.fulfilled, (state, action) => {
        state.diet = state.deleteDiet.fillter(
          (item) => item._id === action.payload._id
        );
      });
  },
});

export default dietSlice.reducer;
