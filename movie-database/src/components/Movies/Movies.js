import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import {useSelector} from 'react-redux';
import store from "../../store";

function Movies(props) {
// const {setMovies} = props;

const movies= useSelector((store)=>store.movies.movies);
console.log(movies)

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{props.title}</h2>
        <div className={styles.movie__container}>
          {
            movies.map(function(movie){
              return <Movie key={movie.id} movie={movie}/>
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Movies;
