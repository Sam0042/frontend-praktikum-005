import styles from "./AddMovieForm.module.css";
import gambar01 from "./Assets/gambar-1.jpg";

function AddMoviesForm() {
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
                    <form action="">
                        <label for="username" className={styles.form__label}>Title</label><br />
                        <input type="text" className={styles.form__input} placeholder='Title'/>
                        <br /> <br />
                        <label for="password" className={styles.form__label}>Year</label><br />
                        <input type="text" className={styles.form__input} placeholder='Year'/>
                        <br /><br />
                        <input type="submit" value="Submit" className={styles.form__submit}/>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMoviesForm;