import StyledMovie from "./Movie.styled";

function Movie(props){
    console.log(props.movie);

    const {movie} = props;

    return(
        <StyledMovie>
            <img
              src={movie.poster}
              alt=""
            />
            <h3 >{movie.title}</h3>
            <p >{movie.genre}</p>
            <p >{movie.year}</p>
        </StyledMovie>
    )
}

export default Movie;