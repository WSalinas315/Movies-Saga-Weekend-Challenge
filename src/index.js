import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    console.log(`ROOT SAGA being called`);
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('NEW_DETAIL', setDetailURL);
    yield takeEvery('FETCH_ID_GENRES', fetchIDGenres);
    yield takeEvery('FETCH_ALL_GENRES', fetchAllGenres);
}

// Sets detailURL with a selected movie title from the MovieList component
function* setDetailURL(action) {
    try {
        console.log('In SAGA setDetailURL with:', action.payload);
        yield put({ type: 'SET_DETAIL', payload: action.payload });
    } catch (error){
        console.log('Error setting detailURL:', error);
    }
}

// Get all movies from the database
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch (error){
        console.log('get all error:', error);
    }
}

// Get all genres from database
function* fetchAllGenres(){
    try{
        const genres = yield axios.get('/api/genre');
        yield put({type: 'SET_ALL_GENRES', payload: genres.data});
    }catch (error){
        console.log('get all genres error:', error);
    }
}

// Get all genres by ID from the database
function* fetchIDGenres(action) {
    try {
        const genres = yield axios.get('/api/genre/'+action.payload);
        yield put({type: 'SET_GENRES', payload: genres});
    } catch (error){
        console.log('Error fetching genres by ID:', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movie details URL
const detailURL = (state = '', action) => {
    // console.log('In store detailURL with:', action.payload);
    switch (action.type) {
        case 'SET_DETAIL':
            // console.log('In store detailURL, SET_DETAIL case with:', action.payload);
            return `detail/${action.payload}`;
        case 'SET_DETAIL_HOME':
            return '';
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = {data:[]}, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store all movie genres
const allGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the selected movie object
const selectedMovie = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({ movies, genres, detailURL, selectedMovie, allGenres }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>,
    //  </React.StrictMode>,
    document.getElementById('root')
);
