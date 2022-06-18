import axios from "axios";
import { useEffect,  } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";

function Detail(){
    const params = useParams();
    const dispatch = useDispatch();
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=> {
        getRecommendationMovies();
    }, [params.id])

    async function getRecommendationMovies(){
        const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`
        const response = await axios(URL);

        dispatch(updateMovies(response.data.results))

    }


    return(
        <div>
            <br /><br /><br /><br />
            <DetailMovie/>
            <Movies />
        </div>
        
    )
}

export default Detail;