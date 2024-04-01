import { useLoaderData, useParams, Link } from "react-router-dom"

const imgUrl = "https://image.tmdb.org/t/p/w500";
export default function GenreMovies() {
    const { id } = useParams()
    const movies = useLoaderData().results

    return (
        <div className="movies">
            <div className="movies-container">
                {
                    movies.map(movie => (
                        <Link
                            to={"/movies/" + movie.id.toString()}
                            key={movie.id}
                            preventScrollReset={true} >
                            <div key={movie.id} className="movie">
                                <div className="movie__thumbnail img-container">
                                    <img
                                        src={imgUrl + movie.poster_path}
                                        className="img"
                                        alt={movie.title + " poster"}
                                    />
                                </div>
                                <div className="movie__details">
                                    <h2>{movie.title}</h2>
                                </div>
                                <span className="rating">{Math.round(movie.vote_average * 10) / 10}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export const genreMoviesLoader = async ({ params }) => {
    const { id } = params

    const res =
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0a37faeccee2b6ba9614f84e338a03ed&with_genres=${id}`)

    return res.json()
}
