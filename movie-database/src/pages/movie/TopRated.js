import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRated(){

    /**membuat dispatch */
    const dispatch = useDispatch();

    useEffect(() =>{
        getTopRatedMovies();
    }, [])

    async function getTopRatedMovies(){
        const response = await axios(ENDPOINTS.TOP_RATED);
        /**memanggil dispatch */
        dispatch(updateMovies(response.data.results))
    }


    return(
        <div>
            <Hero/><br/>
            <Movies title='Top Rated'/>
        </div>
    )
}

export default TopRated;