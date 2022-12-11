import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

export default function Details() {

  // get detail URL from the store
  // const movies = useSelector(store => store.movies);
  const movie = useSelector(store => store.selectedMovie);
  const genres = useSelector(store => store.genres);

  // initialize history
  const history = useHistory();

  // initialize dispatch
  const dispatch = useDispatch();

  // function to return to user to the home page
  const goHome = () =>{
    dispatch({type: 'SET_DETAIL_HOME'});
    history.push('/');
  }

  // mapping over the genres for a particular movie and returning the genre name
  const genreList = genres.data.map(genre => {
    return (
      <h3 key={genre.id}>{genre.name}</h3>
    )
  })

  return (
    <div className='movie-details'>
      <Button variant='contained' onClick={() => goHome()}>Back To List</Button>
      <img src={movie.poster} />
      <h1>{movie.title}</h1>
      <h3>Genres:</h3>
      {genreList}
      <h3>{movie.description}</h3>
    </div>
  )
}