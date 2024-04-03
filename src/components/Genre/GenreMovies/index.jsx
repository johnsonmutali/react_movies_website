import { useLoaderData, useParams, Link } from "react-router-dom"

const imgUrl = "https://image.tmdb.org/t/p/w500";
export default function GenreMovies() {
    const { id } = useParams()
    const movies = useLoaderData().results
    const moviesObj = useFetch(movies, title)

    return moviesObj
}

export const genreMoviesLoader = async ({ params }) => {
    const { id } = params

    const res =
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0a37faeccee2b6ba9614f84e338a03ed&with_genres=${id}`)

    return res.json()
}
