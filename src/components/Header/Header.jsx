import React from "react";
import './Header.css';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

export default function Header({headerText}){

  // initialize history
  const history = useHistory();

  // initialize dispatch
  const dispatch = useDispatch();

  // function to return to user to the home page
  const goHome = () =>{
    dispatch({type: 'SET_DETAIL_HOME'});
    history.push('/');
  }

  return(
    <div className="page-header">
      {/* conditional rendering for a back button when not currently on the home page */}
      {headerText != "MovieList" && <div><Button variant='contained' onClick={() => goHome()}>Back To List</Button></div>}
      <h1>{headerText}</h1>
    </div>
  )
}