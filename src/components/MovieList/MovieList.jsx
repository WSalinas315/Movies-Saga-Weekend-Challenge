import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

function MovieList() {

    // initialize dispatch
    const dispatch = useDispatch();

    // initialize history
    const history = useHistory();

    // get movies array from the store
    const movies = useSelector(store => store.movies);

    // get detail URL from the store
    const url = useSelector(store => store.detailURL);

    // fetches the movie list
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // calls histPush when url is updated
    useEffect(() => {
        histPush();
    }, [url]);

    // function to update the detailURL in the redux store
    const detailedPage = (title, movie) => {
        dispatch({type: 'NEW_DETAIL', payload: title});
        dispatch({type: 'SELECT_MOVIE', payload: movie});
        dispatch({type: 'FETCH_ID_GENRES', payload: movie.id});
    }

    // function to update to a detail/movie.title route
    const histPush = () => {
        history.push(`/${url}`);
    }

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    // <MovieItem movie={movie} />
                    return (
                        <div key={movie.id} className="movie-card">
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => detailedPage(movie.title, movie)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;