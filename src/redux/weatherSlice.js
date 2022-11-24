import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=590270b05573bd5aefeef35d1ab6d4c7`);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error
            }
            return rejectWithValue(error?.response?.data);
        }

    }
)

//slice

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    extraReducers: (builder) => {
        //pending
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
            console.log("fetching data...")
        });
        //fulfilled
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            localStorage.setItem("searchfromthunk", JSON.stringify(state.weather));
            state.loading = false;
            state.error = undefined;
            console.log("fetched successfully...")
        });
        //rejected
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });

    },
});

export default weatherSlice.reducer;