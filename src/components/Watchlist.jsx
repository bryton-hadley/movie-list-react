// step 1: import moive card
import MovieCard from "./MovieCard";


const Watchlist = ({list, removeMovie}) => {
// creating the movieDisplay variable and using .map to map over the list
    const movieDisplay = list.map((movie, index) => {

        return (
            <MovieCard movie={movie} list={list} removeMovie={removeMovie} />
        )
    }) 

    return (
        <div className="watchlist">

            <h1>My Watchlsit</h1>

            <div className="movie-container">
                {movieDisplay}
            </div>

        </div>
    );
}

export default Watchlist;