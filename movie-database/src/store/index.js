/**import configureStore */
import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from '../features/moviesSlice';

/**membuat store untuk menyimpan reducer */
const store=  configureStore({
    reducer:{
        movies: moviesReducer,
    }
});

export default store;