import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    headerDropOpen: false,
    musicPlayOpen: false,
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        openDropMenu: (state, action) => {
            state.headerDropOpen = action.payload
        },
        musicPlay: (state, action) => {
            state.musicPlayOpen = action.payload

        },
    }
});

export const { openDropMenu, musicPlay } = globalSlice.actions

export default globalSlice.reducer