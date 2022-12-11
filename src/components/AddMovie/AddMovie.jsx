import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React from 'react';
import './AddMovie.css';

export default function AddMovie() {

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize history
  const history = useHistory();

  // function to return to user to the home page
  const goHome = () => {
    // dispatch({ type: 'SET_DETAIL_HOME' });
    history.push('/');
  }




  return (
    <div>
      <div> {/* Form control starts here */}
        <div className='buttons'>
          <Button variant='contained' onClick={() => goHome()}>Cancel</Button>
          <Button variant='contained' type='submit'>Submit</Button>
        </div>
      </div>
    </div>



  )
}