import "./index.scss"
import Footer from "../Footer"
import { useLoaderData, Link } from "react-router-dom"


const apiKey = "api_key=0a37faeccee2b6ba9614f84e338a03ed";
const apiURL = "https://api.themoviedb.org/3/tv/popular?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function Tv() {
    const movies = useLoaderData().results

    return (
        <>
            <div className="movies" >
                <div className="movies-container">
                    {
                        movies.map(movie => (
                            <Link
                                to={movie.id.toString()}
                                key={movie.id}
                                preventScrollReset={true}>
                                <div key={movie.id} className="movie">
                                    <div className="movie__thumbnail img-container">
                                        <img
                                            src={imgUrl + movie.poster_path}
                                            className="img"
                                            alt={movie.name + " poster"}
                                        />
                                    </div>
                                    <div className="movie__details">
                                        <h2>{movie.name}</h2>
                                    </div>
                                    <span className="rating">{Math.round(movie.vote_average * 10) / 10}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export const tvLoader = async () => {
    const res = await fetch(apiURL)

    if (!res.ok) throw new Error("Couldn't fetch")

    return res.json()
}