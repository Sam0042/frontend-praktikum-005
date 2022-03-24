import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {

  const [movies,setMovies]=useState(data);

  function handleClick(){
    const movie={
      id: nanoid(),
      title: 'Arcane',
      year: '2021',
      poster: 'https://image.tmdb.org/t/p/w185/mL3QgH8T4F5tQ9cVDVY5J7glsb5.jpg',
    }

    setMovies([...movies,movie]);

  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map(function(movie){
              return <Movie key={movie.id} movie={movie}/>
            })
          }
        </div>
        <button onClick={handleClick} className={styles.movies__button}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
