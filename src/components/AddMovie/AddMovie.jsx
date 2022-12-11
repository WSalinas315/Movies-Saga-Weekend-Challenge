import { useHistory } from "react-router-dom";
import { Button, FormControl, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import './AddMovie.css';

export default function AddMovie() {

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize history
  const history = useHistory();

    // local state
    const [movieTitle, setMovieTitle] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [description, setDescription] = useState('');
    
    // function to return to user to the home page
  const goHome = () => {
    // dispatch({ type: 'SET_DETAIL_HOME' });
    history.push('/');
  }


  const submitMovie = (event) => {

  }

  return (
    <form className="form-body" onSubmit={(event) => submitMovie(event)}>
        <div className='buttons'>
          <Button variant='contained' onClick={() => goHome()}>Cancel</Button>
          <Button variant='contained' type='submit'>Submit</Button>
        </div>
        <FormControl>
          <TextField required
                    value={movieTitle} 
                    label="Movie Title" 
                    onChange={(event) => setMovieTitle(event.target.value)}
                    variant="filled"/>
          <TextField required
                    value={moviePoster} 
                    label="Movie Poster URL" 
                    onChange={(event) => setMoviePoster(event.target.value)}
                    variant="filled"/>
          <TextField required
                    value={description} 
                    label="Description" 
                    onChange={(event) => setDescription(event.target.value)}
                    variant="filled"/>
        </FormControl>
    </form>



  )
}