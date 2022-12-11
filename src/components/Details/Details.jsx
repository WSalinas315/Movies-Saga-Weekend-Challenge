import { useSelector } from 'react-redux';


export default function Details() {

  // get detail URL from the store
  // const movies = useSelector(store => store.movies);
  const movie = useSelector(store => store.selectedMovie);
  const genres = useSelector(store => store.genres);

  // mapping over the genres for a particular movie and returning the genre name
  const genreList = genres.data.map(genre => {
    return (
      <h3 key={genre.id}>{genre.name}</h3>
    )
  })

  return (
    <div className='movie-details'>
      <img src={movie.poster} />
      <h1>{movie.title}</h1>
      <h3>Genres:</h3>
      {genreList}
      <h3>{movie.description}</h3>
    </div>
  )
}