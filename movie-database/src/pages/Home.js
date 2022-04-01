// Import Footer, Hero, Movies, Navbar Component
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import AddMoviesForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from '../utils/constants/data.js';
/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {

  const [movies,setMovies]=useState(data);

  return (
    <main>
      <Hero /><br />
      <Movies movies={movies} setMovies={setMovies}/>
      <AddMoviesForm movies={movies} setMovies={setMovies}/>
    </main>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
