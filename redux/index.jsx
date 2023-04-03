import {configureStore} from '@reduxjs/toolkit';
import globalReducer from "./globalStore";
const store = configureStore({
    reducer: {
        global: globalReducer
    }
});

export default store;