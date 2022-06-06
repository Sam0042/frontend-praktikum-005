import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying(){

    const [movies,setMovies]= useState([]);

    useEffect(() =>{
        getNowPlayingMovies();
    }, [])

    async function getNowPlayingMovies(){
        const response = await axios(ENDPOINTS.NOW_PLAYING);
        setMovies(response.data.results);
    }


    return(
        <div>
            <Hero/><br/>
            <Movies movies={movies} title='Now Playing'/>
        </div>
    )
}

export default NowPlaying;