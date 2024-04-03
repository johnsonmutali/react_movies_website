import "../details.scss"
import Footer from "../../Footer"
import { useLoaderData, useParams } from "react-router-dom"

const imgUrl = "https://image.tmdb.org/t/p/w500";


export default function MoviesDetails() {
    const { id } = useParams()
    const movie = useLoaderData()

    return (
        <div
            className="movie-container"
            style={{
                backgroundImage: `url(${imgUrl}${movie.backdrop_path})`
            }}>
            <div className="movie-container__main">
                <div className="movie-container__header">
                    <div className="header__main">
                        <h1 className="title">{movie.title}</h1>
                        <div className="release-and-cast">
                            <span className="release">{movie.release_date}</span>
                            <button type="submit" className="btn">watch trailer</button>
                        </div>
                    </div >
                    <div className="header__id">{movie.id}</div>
                </div >
                <div className="hr"></div>
                <div className="movie-container__details">
                    <div className="thumbnail img-container">
                        <img
                            src={imgUrl + movie.poster_path}
                            className="img thumbnail"
                        />
                    </div>
                    <div className="review-and-genre">
                        <p className="review">{movie.overview}</p>
                        <div className="genres">{
                            movie.genres.map(genre => (
                                <span className="genre-btn" key={genre.id}> {genre.name}</span>
                            ))
                        }</div>
                    </div>
                    <div className="rating-and-vote">
                        <div className="rating">{movie.vote_average}</div>
                        <div className="vote">{movie.popularity}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const moviesDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0a37faeccee2b6ba9614f84e338a03ed`)

    if (!res.ok) throw new Error("Oops! Something wrong at movies details")

    return res.json()
}
