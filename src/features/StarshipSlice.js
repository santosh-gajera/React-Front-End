import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
   startship_data:[],
   details:"N",
   selectedData:[]
};

export const getData = createAsyncThunk(
  'starshipdata',
  async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    // The value we return becomes the `fulfilled` action payload

    let data = await response.json();
    return data.results;
  }
);

export const startshipSlice = createSlice({
  name: 'startship_data',
  initialState,
  reducers: {
    setSelected: (state,action) => {
      state.selectedData  =[action.payload];
      state.details = "Y"
    },
    unsetSelected: (state) => {
      state.selectedData  = [];
      state.details = "N"
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.startship_data = [];
      })
      .addCase(getData.fulfilled, (state, action) => {
      
        state.startship_data = action.payload
      });
  },
});

export const { setSelected, unsetSelected } = startshipSlice.actions
export default startshipSlice.reducer;
