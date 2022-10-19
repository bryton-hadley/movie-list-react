// importing useEffect and useState from react 
// importing axios
// importing the header from components 
//  importing movieScreens 
//  importing Watchlist 
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';

function App() {
  // addign variables for movies and watch list
  const [list,setList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  
  //  creating a function that takes in movie as a param
  //  this will use setList to create a copy of list and then add the movie passed in to the list
  const addMovie = (movie) => setList([...list, movie]);

  // setting up secrect url
  const getData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };
  useEffect(() => {
    getData(); 
  }, [page]);


  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen 
        addMovie={addMovie}
        movieList={movieList}
        page={page}
        setPage={setPage}
        list={list}
        />
        <Watchlist list={list} />
      </main>
    </div>
  );
}

export default App;
