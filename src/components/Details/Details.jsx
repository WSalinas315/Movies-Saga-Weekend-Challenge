import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import './Details.css';

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
  const goHome = () => {
    dispatch({ type: 'SET_DETAIL_HOME' });
    history.push('/');
  }

  // mapping over the genres for a particular movie and returning the genre name
  const genreList = genres.data.map(genre => {
    return (
      <h3 key={genre.id}>{genre.name}</h3>
    )
  })

  return (
    <div className='details-container'>
      <div className='movie-details'>
        <div className='back-btn'>
          <Button variant='contained' onClick={() => goHome()}>Back To List</Button>
        </div>
        <div className='imgage-container'>
          <img src={movie.poster} />
        </div>
        <div className='basic-info'>
          <h1>{movie.title}</h1>
          <h3>Genres:</h3>
          {genreList}
        </div>
      </div>
      <div className='description'>
        <h3>{movie.description}</h3>
      </div>
    </div>
  )
}