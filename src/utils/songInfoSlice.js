import { createSlice, current } from "@reduxjs/toolkit";

const songInfoSlice = createSlice({
  name: "songInfo",
  initialState:{
    info:{}, 
  },
  reducers: {
    showSongInfo: (state, action) => {
        state.info = action.payload
    },
  },
});

export default songInfoSlice.reducer;

export const { showSongInfo } = songInfoSlice.actions;
