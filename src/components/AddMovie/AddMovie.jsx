import { useHistory } from "react-router-dom";
// import { Button, FormControl, InputLabel, MenuItem, TextField, Select } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import './AddMovie.css';

export default function AddMovie() {

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize history
  const history = useHistory();

  // get allGenres from the store
  const allGenres = useSelector(store => store.allGenres);

  // local state
  const [movieTitle, setMovieTitle] = useState('');
  const [moviePoster, setMoviePoster] = useState('');
  const [description, setDescription] = useState('');
  const [genreID, setGenreID] = useState('');

  // function to return to user to the home page
  const goHome = () => {
    // dispatch({ type: 'SET_DETAIL_HOME' });
    history.push('/');
  }

  // set the selected genre id value
  const handleChange = (event) => {
    setGenreID(event.target.value);
  }

  //
  const submitMovie = (event) => {

  }
  // return 
  const genreList = allGenres.map(genre => {
    console.log('ALL GENRES FROM ADDMOVIE: ', allGenres);
    return (
      <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
    )
  })

  return (
    <form className="form-body" onSubmit={(event) => submitMovie(event)}>
      <div className='buttons'>
        <Button variant='contained' onClick={() => goHome()}>Cancel</Button>
        <Button variant='contained' type='submit'>Submit</Button>
      </div>
      <FormControl style={{ display: 'flex', flexDirection: 'row', gap: '50px', justifyContent: 'center', marginTop: '30px' }}>
        <TextField required
          value={movieTitle}
          label="Movie Title"
          onChange={(event) => setMovieTitle(event.target.value)}
          variant="filled"
          style={{ background: 'white' }} />
        <TextField required
          value={moviePoster}
          label="Movie Poster URL"
          onChange={(event) => setMoviePoster(event.target.value)}
          variant="filled"
          style={{ background: 'white' }} />
        <TextField required
          value={description}
          label="Description"
          onChange={(event) => setDescription(event.target.value)}
          variant="filled"
          style={{ background: 'white' }} />
      </FormControl>
      <br /><br />
      <FormControl>
        <div className="genre-select-div">
          <InputLabel id='genre-select' style={{color:'black'}} >Set Genre</InputLabel>
          <Select
            fullWidth
            value={genreID}
            id='genre-select-id'
            label="Genre"
            labelId='genre-select'
            onChange={handleChange}
            style={{ background: 'white' }}>
            {genreList}
          </Select>
        </div>
      </FormControl>
    </form >
  )
}