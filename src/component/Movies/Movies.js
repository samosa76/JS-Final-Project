import Movie from '../Movie/Movie';
import style from './Movies.module.css'
import data from '../../utils/data/data'
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Movies() {
    // const test = Element;
    // const test2 = [];
    // for (let index = 0; index < 10; index++) {
    //     test2.push(<Movie/>)
    // }
    const [movies, setMovies] = useState(data);
    // const movies = data;

    function onClick() {
        const movie = {
            id: nanoid(),
            title: "Lord of The Mysteries",
            year: `${nanoid()}`,
            type: "Movie",
            poster: "https://picsum.photos/id/197/200/300"
        }
        // movies.push(movie);
        setMovies([...movies, movie]);
    }
    // const test = [];

    // for (let index = 0; index < movies.length; index++) {
    //     test.push(<Movie title=""/>)
    // }


    return (
        <div className={style.container}>
            <section className={style.movies}>
                <h2 className={style.movie__title}>Movies</h2>
                <div className={style.movie__container}>
                    {/* {for (let index = 0; index < array.length; index++) {
                        const element = array[index];
                        
                    }} */}
                    {movies.map((movie) => {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </div>
                <div>
                    <button onClick={onClick}>Add New Film</button>
                </div>
            </section>

        </div>
    )
}

export default Movies;