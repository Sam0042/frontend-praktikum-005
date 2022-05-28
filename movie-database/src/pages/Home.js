// Import Footer, Hero, Movies, Navbar Component
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import AddMoviesForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from '../utils/constants/data.js';



function Home() {
/**
 * Lifting state
 */
  
  const [movies,setMovies]=useState(data);

  return (
    <>
      <Hero /><br />
      <Movies movies={movies} setMovies={setMovies} title='Latest Movies'/>
      <AddMoviesForm movies={movies} setMovies={setMovies}/>
    </>
  );
}

export default Home;
