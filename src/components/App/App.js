import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {

  return (
    <div className="App">
      <Router>
        {/* Home page */}
        <Route exact path="/">
          <Header />
          <MovieList />
        </Route>
        {/* Details page */}
        <Route exact path="/detail/:id">
          <Header />
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route exact path="/add">
          <Header />
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
