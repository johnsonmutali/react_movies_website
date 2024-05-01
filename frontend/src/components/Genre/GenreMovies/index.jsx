//pages
import Footer from "../../Footer"
import MoviesList from "../../Movies/MoviesList.jsx"

//hooks
import { useLoaderData, useParams, Link } from "react-router-dom"

//from tmdb
const imgUrl = "https://image.tmdb.org/t/p/w500";


export default function GenreMovies() {
  const { id } = useParams()
  const movies = useLoaderData().results

  return (
    <>
      <MoviesList
        movies={movies}
        title_type={"title"}
        linkDestination={"/movies/"} />
      <Footer />
    </>
  )
}

export const genreMoviesLoader = async ({ params }) => {
  const { id } = params

  const res =
    await
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}`)

  if (!res.ok) throw new Error("Counldnt fetch!")

  return res.json()
}
