import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";
import Button from "../ui/Button";

function Movies(props) {
const {movies,setMovies} = props;

  function handleClick(){
    const movie={
      id: nanoid(),
      title: 'Arcane',
      year: '2021',
      genre: 'Animation',
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
        <Button variant='secondary' size='md' onClick={handleClick} >Add Movie</Button>
      </section>
    </div>
  );
}

export default Movies;
