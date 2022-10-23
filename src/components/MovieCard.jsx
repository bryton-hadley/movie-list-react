
const MovieCard = ({movie, addMovie, list, removeMovie}) => {

    const inWatchlist = list.filter((movi) => {
        return movi.id === movie.id;
    });

    const button = inWatchlist.length === 0 ? (
        
        <button onClick={() => addMovie(movie)}>Add to list</button>

    ) : (
        <button onClick={() => removeMovie(movie)}>Remove</button>

    );

    return (
        <div className="movie-card">
            <div>
           <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <h3>{movie.original_title}</h3> 
            </div>
            <div className="btn-card">
            {button}
            </div>
        </div>
    );
}

export default MovieCard;