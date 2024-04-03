import "./index.scss"
import Footer from "../Footer"
import { useLoaderData, Link, useActionData } from "react-router-dom"
import { useState, useEffect } from "react"

const apiKey = "api_key=0a37faeccee2b6ba9614f84e338a03ed";
const apiURL = "https://api.themoviedb.org/3/movie/popular?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";


export default function Movies({ query }) {
    const defaultMovies = useLoaderData().results
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0a37faeccee2b6ba9614f84e338a03ed&query=${query}`)
                .then(res => {
                    if (!res.ok) {
                        console.log("no movies")
                        return
                    }
                    return res.json()
                })
                .then(data => {
                    setMovies(data.results)
                })
        } else {
            setMovies(defaultMovies)
        }
    }, [query])
    return (
        <>
            <div className="movies">
                <div className="movies-container">
                    {
                        movies.map(movie => (
                            <Link
                                to={movie.id.toString()}
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
            </div>
            <Footer />
        </>
    )
}

export const moviesLoader = async () => {
    const res = await fetch(apiURL)

    if (!res.ok) throw new Error("Oops! Something went wrong, could not fetch movies")

    return res.json()
}
