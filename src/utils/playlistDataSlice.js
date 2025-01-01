import { createSlice, current } from "@reduxjs/toolkit";

const playlistDataSlice = createSlice({
    name: "PlaylistData",
    initialState: {
        Data: []
    },
    reducers: {
        ShowPlaylistData: (state, action) => {
            state.Data.push(action.payload)

        },
        
    }
})  

export default playlistDataSlice.reducer

export const {ShowPlaylistData} = playlistDataSlice.actions