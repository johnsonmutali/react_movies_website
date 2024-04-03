import { Link } from 'react-router-dom';

const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movies, title_type, linkDestination }) {
    return (
        <div className="movies">
            <div className="movies-container">
                {movies.map(movie => (
                    <Link to={linkDestination + movie.id.toString()} key={movie.id}>
                        <div className="movie" key={movie.id}>
                            <div className="movie__thumbnail img-container">
                                <img src={imgUrl + movie.poster_path}
                                    className="img" alt={
                                        movie.title_type + " poster"
                                    } />
                            </div>
                            <div className="movie__details">
                                <h2>{movie.title_type}</h2>
                            </div>
                            <span className="rating">{
                                Math.round(movie.vote_average * 10) / 10
                            }</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
};

