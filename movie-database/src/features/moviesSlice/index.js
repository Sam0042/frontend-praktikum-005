/*import createSlice */
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/***membuat slice untuk meng-generate action dan reducers
 * reducer menerima parameter object: name,initialState,reducers(berisi method-method)
*/
const moviesSlice= createSlice({
    name: 'Movies Slice',
    initialState: {
        movies: data
    },
    reducers: {
        addMovie(state,action){
            /**menambahkan movie ke movies */
            state.movies.push(action.payload)
        },
        updateMovies(state,action){
            state.movies = action.payload
        },
    }},
);

/**meng-generate reducers */
const moviesReducer= moviesSlice.reducer;
/**meng-generate action */
const {addMovie,updateMovies}= moviesSlice.actions;

/**export reducer */
export default moviesReducer;
/**export action */
export {addMovie,updateMovies};