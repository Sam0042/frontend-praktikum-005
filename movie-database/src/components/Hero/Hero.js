import StyledHero from "./Hero.styled";
import gambar01 from "./Assets/gambar-1.jpg";
import Button from "../ui/Button";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";
import axios from "axios";
import { useEffect, useState} from 'react';

function Hero() {

  const [movie,setMovie]= useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  console.log(trailer)

  useEffect(getDetailMovie,[]);

  async function getTrendingMovies(){
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response= await axios(URL);
    return response.data.results[4];
  }

  async function getDetailMovie(){
    const trendingMovie= await getTrendingMovies();
    const id = trendingMovie.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data)

    setMovie(response.data);
  }



  return (
    <StyledHero>
      <section>
        <div className='hero__left'>
          <br/>
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
            <span>
              {movie.vote_average}
            </span>
          </Paragraph>
          <Button variant='primary' size='lg' as='a' href={trailer} target='_blank' >Watch Movie</Button>
        </div>
        <div className="hero__right">
          <a href={movie.homepage} target='_blank'>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="placeholder"
            />
          </a>
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
