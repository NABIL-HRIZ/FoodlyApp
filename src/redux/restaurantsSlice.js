import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const cached = localStorage.getItem('restaurants');
    if (cached) {
      return JSON.parse(cached).slice(0, 20);
    }

    const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '38176af0b8msh3c09d796c566276p1ddb18jsn4545ae4663b7',
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const restaurantsData = (result.data.data || []).slice(0, 20);
    localStorage.setItem('restaurants', JSON.stringify(restaurantsData));
    return restaurantsData;
  }
);

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    data: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default restaurantsSlice.reducer;
