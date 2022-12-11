import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
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

    // fetches the movie list and genres
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_ALL_GENRES' });
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

    // function to move to the add movie route
    const addMovie = () =>{
        history.push('/add');
    }

    return (
        <main>
            <h1>Movie List</h1>
            <div className="add-btn">
                <Button variant='contained' onClick={() => addMovie()}>Add Movie</Button>
            </div>
            <section className="movies">
                {movies.map(movie => {
                    // <MovieItem movie={movie} />
                    return (
                        <div key={movie.id} className='movie-card'>
                            <h3 className='movie-title'>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => detailedPage(movie.title, movie)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;