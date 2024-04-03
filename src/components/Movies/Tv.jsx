import "./index.scss"
//pages
import Footer from "../Footer"
import MovieList from "./MoviesList.jsx"

//hooks
import { useLoaderData, Link } from "react-router-dom"

//from tm
const apiKey = "api_key=0a37faeccee2b6ba9614f84e338a03ed";
const apiURL = "https://api.themoviedb.org/3/tv/popular?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function Tv() {
    const movies = useLoaderData().results

    return (
        <>
            <MovieList
                movies={movies}
                title_type={"name"}
                linkDestination="" />
            <Footer />
        </>
    )
}

export const tvLoader = async () => {
    const res = await fetch(apiURL)

    if (!res.ok) throw new Error("Couldn't fetch")

    return res.json()
}