import axios from "axios";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying(){

    const dispatch = useDispatch();

    useEffect(() =>{
        getNowPlayingMovies();
    }, [])

    async function getNowPlayingMovies(){
        const response = await axios(ENDPOINTS.NOW_PLAYING);
        dispatch(updateMovies(response.data.results))
    }


    return(
        <div>
            <Hero/><br/>
            <Movies title='Now Playing'/>
        </div>
    )
}

export default NowPlaying;