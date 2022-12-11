import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import Details from '../Details/Details';

function App() {

  return (
    <div className="App">
      {/* <h1>The Movies Saga!</h1> */}
      <Router>
        {/* Home page */}
        <Route path="/" exact>
          <Header />
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/detail/:id" exact>
          <Header />
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
