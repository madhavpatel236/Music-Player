import { configureStore } from '@reduxjs/toolkit'
import playlistDataReducer from './playlistDataSlice'
import songInfoReducer from './songInfoSlice'

    const store = configureStore({
        reducer: {
            playlistData: playlistDataReducer,
            songInfo: songInfoReducer,
        },
    })

export default store;