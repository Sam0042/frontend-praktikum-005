import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

function Movie(props){

    const {movie} = props;

    return(
        <StyledMovie>
            <Link to={`/movie/${movie.id}`}>
                <img
                src={movie.poster || `https://image.tmdb.org/t/p/w500${movie.poster_path} `}
                alt=""
                />
                
                <h3 >{movie.title}</h3>
            </Link>
            <p >{movie.genre}</p>
            <p >{movie.year || movie.release_date}</p>
        </StyledMovie>
    )
}

export default Movie;