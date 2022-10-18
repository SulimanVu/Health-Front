import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from '../serverUrl';

const initialState = {
    error: null,
    signingUp: false,
    signingIn: false,
    token: localStorage.getItem('token'),
    name: localStorage.getItem('name'),
};

export const authSignUp = createAsyncThunk('auth/signup', async ({ login, password }, thunkAPI) => {
    try {
        const res = await fetch(`${serverUrl}/user`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ login, password })
        })

        const json = await res.json();

        if (json.error) {
            return thunkAPI.rejectWithValue(json.error)
        }
        return json
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})

export const authSignIn = createAsyncThunk('auth/signin', async ({ login, password }, thunkAPI) => {
    try {
        const res = await fetch(`${serverUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ login, password })
        })
        const token = await res.json()
        if (token.error) {
            return thunkAPI.rejectWithValue(token.error)
        }
        localStorage.setItem('token', token.token);
        localStorage.setItem('name', token.name);
        return token;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
})

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authSignUp.pending, (state) => {
                state.signingUp = true;
                state.error = null;
            })
            .addCase(authSignUp.rejected, (state, action) => {
                state.signingUp = false;
                state.error = action.payload;
            })
            .addCase(authSignUp.fulfilled, (state, action) => {
                state.signingUp = false;
                state.error = null;
            })
            .addCase(authSignIn.pending, (state) => {
                state.signingIn = true;
                state.error = null;
            })
            .addCase(authSignIn.rejected, (state, action) => {
                state.signingIn = false;
                state.error = action.payload;
            })
            .addCase(authSignIn.fulfilled, (state, action) => {
                state.signingIn = false;
                state.error = null;
                state.token = action.payload.token;
                state.name = action.payload.name
            })
    },
})

export default applicationSlice.reducer;