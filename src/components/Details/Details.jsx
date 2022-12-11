import { useSelector } from 'react-redux';


export default function Details() {

  // get detail URL from the store
  // const movies = useSelector(store => store.movies);
  const movie = useSelector(store => store.selectedMovie);


  return (
    <div className='movie-details'>
      <img src={movie.poster} />
      <h1>{movie.title}</h1>
      <h3>{movie.description}</h3>

    </div>
  )
}