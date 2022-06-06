import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function Popular(){

    const [movies,setMovies]= useState([]);

    useEffect(()=>{
      getPopularMovies();
    }, []);

    async function getPopularMovies(){ 
        const response= await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }

    return(
        <div>
            <Hero/><br/>
            <Movies movies={movies} title='Popular Movies'/>
        </div>
    )
}

export default Popular;