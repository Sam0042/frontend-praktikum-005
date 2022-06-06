import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";
import StyledDetailMovie from "./DetailMovie.styled";


function DetailMovie(){

    /**
     * ambil ID dari parameter URL
     * fetch detail movie by ID
     */
    const params = useParams();
    const [movie,setMovie]= useState('');
    const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    

    useEffect(()=>{
       getDetailMovie(); 
    },[params.id]);

    async function getDetailMovie(){
        const API_KEY = process.env.REACT_APP_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await axios(URL);

        setMovie(response.data);
    }

    
    return (
        <StyledDetailMovie>
          <div className="poster">
          <a href={movie.homepage} target='_blank'>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
          </a>
          </div>
          <div className="info">
            <br />
            <Heading variant='secondary' size='xl'>{movie.title}</Heading>
            <h3>
                {genres}
            </h3>
            <Paragraph variant='grey' size='md'>
                <p>
                    {movie.overview}
                </p>
            </Paragraph>
            <Paragraph variant='secondary' size='md'>
                <span alt='Rating'>
                    {movie.vote_average}
                </span>
            </Paragraph>
            <Button variant='primary' size='lg' as='a' href={trailer} target='_blank' >Watch Movie</Button>
          </div>
        </StyledDetailMovie>
    )
}

export default DetailMovie;