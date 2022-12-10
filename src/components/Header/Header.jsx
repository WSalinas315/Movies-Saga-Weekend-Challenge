import React from "react";
import './Header.css';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Header(props){

  // initialize history
  const history = useHistory();

  // function to return to user to the home page
  const goHome = () =>{
    history.push('/');
  }

  return(
    <header className="page-header">
      {/* conditional rendering for a back button when not currently on the home page */}
      {props.headerText != "MovieList" && 
      <div>
        <Button variant='contained' onClick={() => goHome()}>Back To List</Button>
      </div>}
      <h1>{props.headerText}</h1>
    </header>
  )
}