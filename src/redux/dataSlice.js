import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetcWeatherDeatils = createAsyncThunk(
    'users/fetcWeatherDeatils',
    async (payload) => {
        await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${payload.search}&format=json&u=f`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '842bc111f4mshbb3800ae5e66b65p1c7e57jsn118d0d19a7bb',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => response)
            .catch(err => console.error(err));

    }

)




const dataSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [fetcWeatherDeatils.pending]: (state, action) => {
            console.log("fetching Data...");
        },
        [fetcWeatherDeatils.fulfilled]: (state, action) => {
            console.log("fetched Data Successfully");
            console.log(action.payload)
            return action.payload;
        },
    },

})

export default dataSlice.reducer;

