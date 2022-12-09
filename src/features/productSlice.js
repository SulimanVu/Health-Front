const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { serverUrl } = require('../serverUrl');

const initialState = {
    products:[]
}

export const fetchProduct = createAsyncThunk(
    'product/get',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(`${serverUrl}/product`)
            const products = res.json()
            return products
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer