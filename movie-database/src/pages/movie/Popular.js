import { useEffect } from "react";
import axios from "axios";

function Popular(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    console.log(process.env);

    useEffect(async()=>{
        const response= await axios(URL);
        console.log(response);
    }, []);

    return(
        <div>
            <br/><br/><br/><br/>
            <h1>Popular Movie Page</h1>
        </div>
    )
}

export default Popular;