import StyledMovie from "./Movie.styled";

function Movie(props){
    console.log(props.movie);

    const {movie} = props;

    return(
        <StyledMovie>
            <img
              src={movie.poster || `https://image.tmdb.org/t/p/w500${movie.poster_path} `}
              alt=""
            />
            <h3 >{movie.title}</h3>
            <p >{movie.genre}</p>
            <p >{movie.year || movie.release_date}</p>
        </StyledMovie>
    )
}

export default Movie;