// import { useDispatch } from 'react-redux';
// import React from 'react';

// export default function MovieItem({movie}) {

//   // initialize dispatch
//   const dispatch = useDispatch();

//   // function to update the detailURL in the redux store
//   const detailedPage = (title, movie) => {
//     dispatch({ type: 'NEW_DETAIL', payload: title });
//     dispatch({ type: 'SELECT_MOVIE', payload: movie });
//     dispatch({ type: 'FETCH_ID_GENRES', payload: movie.id });
//   }

//   return (
//     <div key={movie.id} >
//       <h3>{movie.title}</h3>
//       <img src={movie.poster} alt={movie.title} onClick={() => detailedPage(movie.title, movie)} />
//     </div>
//   )
// }