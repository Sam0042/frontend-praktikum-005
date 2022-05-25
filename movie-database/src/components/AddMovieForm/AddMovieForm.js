import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";
import gambar01 from "./Assets/gambar-1.jpg";


function AddMoviesForm(props) {
    const {movies,setMovies} = props;

    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [poster,setPoster] = useState('');
    const [genre,setGenre] = useState('');

    const [isTitleError,setIsTittleError] = useState(false);
    const [isDateError,setIsDateError] = useState(false);
    const [isPosterError,setIsPosterError] = useState(false);
    const [isGenreError,setIsGenreError] = useState(false);

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    }

    function handlePoster(e){
        setPoster(e.target.value)
    }

    function handleGenre(e){
        setGenre(e.target.value)
        console.log(genre)
    }

    function handleSubmit(e){
        e.preventDefault();

        if(title==''){
            setIsTittleError(true);
        }

        else if(date==''){
            setIsDateError(true);
        }

        else if(poster==''){
            setIsPosterError(true);
        }

        else if(genre==''){
            setIsGenreError(true);
        }

        else{
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: 'movie',
                poster: poster,
                genre: genre
            }
            setMovies([...movies,movie]);

            setIsTittleError(false);
            setIsDateError(false);
            setIsPosterError(false);
            setIsGenreError(false);
        }; 
    }
    // const [formData,setFormData]= useState({
    //     title: '',
    //     date: '',
    //     poster: '',
    //     genre: '',
    // })

    // const [isError,setIsError]= useState({
    //     isTitleError: false,
    //     isDateError: false,
    //     isPosterError: false,
    //     isGenreError: false,
    // }) 
    


    // function handleChange(e){
    //     const {name,value}= e.target;

    //     setFormData({
    //         ...formData,
    //         [name]:value,
    //     })

    //     setIsError({
            
    //     })
    // }


    // function handleError(e){
    //     const {setIsTittleError,setIsDateError,setIsPosterError,setIsGenreError}= setIsError;
       
    //     setIsError({
    //         ...isError,
    //         setIsTittleError,
    //     })
    // }

    // handleError(setIsError)

     
    // const [isTitleError,setIsTittleError] = useState(false);
    // const [isDateError,setIsDateError] = useState(false);
    // const [isPosterError,setIsPosterError] = useState(false);
    // const [isGenreError,setIsGenreError] = useState(false);


   
    // const {isTitleError,isDateError,isPosterError,isGenreError}= isError;
    // const{setIsTittleError,setIsDateError,setIsPosterError,setIsGenreError}= setIsError;

    // const { title,date,poster,genre}= formData;

  
    function validate(){
        if(title==''){
            setIsTittleError(true); 
            return false;
        }

        else if(date==''){
            setIsDateError(true);
            setIsTittleError(false);
            return false;
        }

        else if(poster==''){
            setIsPosterError(true);
            setIsDateError(false);
            return false;
        }

        else if(genre==''){
            setIsGenreError(true);
            setIsPosterError(false);
            return false;
        }

        else{
            setIsTittleError(false);
            setIsDateError(false);
            setIsPosterError(false);
            setIsGenreError(false);
            return true;
        }
    }

    function AddMovie(){
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: 'movie',
            poster: poster,
            genre: genre
        }
        setMovies([...movies,movie]);
    }

    function handleSubmit(e){
        e.preventDefault();

        validate() && AddMovie();
    }

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
                            <input type="text" className={styles.form__input} placeholder='Title' value={title} onChange={handleTitle} name='title'/>
                            {
                                isTitleError && <Alert>Title wajib diisi</Alert>
                            }
                        </div>
    
                        <div className={styles.form__group}>
                            <label  className={styles.form__label}>Date</label><br />
                            <input type="text" className={styles.form__input} placeholder='Year' value={date} onChange={handleDate} name='date'/>
                            {
                                isDateError && <Alert>Date wajib diisi</Alert>
                            }
                        </div>

                        <div className={styles.form__group}>
                            <label className={styles.form__label}>Poster</label><br />
                            <input type="text" className={styles.form__poster} placeholder='Poster' value={poster} onChange={handlePoster} name='poster' />
                            {
                                isPosterError && <Alert>Poster wajib diisi</Alert>
                            }

                            <select className={styles.form__genre} id="" onChange={handleGenre} name='genre' >
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