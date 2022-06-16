import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";
import gambar01 from "./Assets/gambar-1.jpg";
import {useDispatch} from 'react-redux';
import { addMovie } from "../../features/moviesSlice";


function AddMoviesForm() {

    /**menangkap dispatch */
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
      });
    
      /**
       * TODO
       * - PROBLEM: 1 ERROR 1 STATE.
       * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
       */
      const [isTitleError, setIsTitleError] = useState(false);
      const [isDateError, setIsDateError] = useState(false);
      const [isPosterError, setIsPosterError] = useState(false);
      const [isGenreError, setIsGenreError] = useState(false);
    
      function handleChange(e) {
        // Destructing name dan value.
        const { name, value } = e.target;
    
        /**
         * Mengupdate state berupa object:
         * - Menggunakan spread operator:
         * - Update property berdasarkan apapun nilai name.
         */
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    
      function validate() {
        if (title === "") {
          setIsTitleError(true);
          return false;
        } else if (date === "") {
          setIsDateError(true);
          setIsTitleError(false);
          return false;
        } else if (poster === "") {
          setIsPosterError(true);
          setIsDateError(false);
          return false;
        } else {
          setIsTitleError(false);
          setIsDateError(false);
          return true;
        }
      }
    

    function submitMovie(){
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: 'movie',
            poster: poster,
            genre: genre,
        }
        
        dispatch(addMovie(movie));
        
        navigate('/');
    }

    function handleSubmit(e){
        e.preventDefault();

        validate() && submitMovie();
    }

    const { title, date, poster, genre } = formData;

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src={gambar01}
                        alt="placeholder"
                    />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>
                        Add Movie
                    </h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>Title</label><br />
                            <input type="text" className={styles.form__input} placeholder='Title' value={title} onChange={handleChange} name='title'/>
                            {
                                isTitleError && <Alert>Title wajib diisi</Alert>
                            }
                        </div>
    
                        <div className={styles.form__group}>
                            <label  className={styles.form__label}>Date</label><br />
                            <input type="text" className={styles.form__input} placeholder='Year' value={date} onChange={handleChange} name='date'/>
                            {
                                isDateError && <Alert>Date wajib diisi</Alert>
                            }
                        </div>

                        <div className={styles.form__group}>
                            <label className={styles.form__label}>Poster</label><br />
                            <input type="text" className={styles.form__poster} placeholder='Poster' value={poster} onChange={handleChange} name='poster' />
                            {
                                isPosterError && <Alert>Poster wajib diisi</Alert>
                            }

                            <select className={styles.form__genre} id="" onChange={handleChange} name='genre' >
                                <option value="" selected>Genres</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Drama">Drama</option>
                                <option value="Musical">Musical</option>
                                <option value="History">History</option>
                                <option value="Romance">Romance</option>
                                <option value="Western">Western</option>
                                <option value="Anime">Anime</option>
                                <option value="Crime">Crime</option>
                            </select>
                            {
                                isGenreError && <Alert>Genre wajib dipilih</Alert>
                            }
                        </div>
                        
                        <br />
                        <Button variant='secondary' size='lg' full>Add Movie</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMoviesForm;