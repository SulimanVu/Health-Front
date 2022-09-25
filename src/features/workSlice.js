import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    work: [],
    loading: false,
}

export const fetchWork = createAsyncThunk('work/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3010/work');
        const data = await res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const workSlice = createSlice({
    name: 'wrok',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWork.fulfilled, (state, action) => {
                state.loading = false;
                state.work = action.payload;
            })
            .addCase(fetchWork.pending, (state, action) => {
                state.loading = true;
            })
    }
});

export default workSlice.reducer;