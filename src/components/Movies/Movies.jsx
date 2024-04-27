//pages
import "./index.scss"
import Footer from "../Footer"
import MoviesList from "./MoviesList.jsx"

//react
import { useLoaderData, Link, useActionData, Form } from "react-router-dom"
import { useState, useEffect } from "react"
import { Search } from "../Icons.jsx"

//tmdb
const apiKey = "api_key=YOUR_API_KEY";
const apiURL = "https://api.themoviedb.org/3/movie/popular?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function Movies() {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const defaultMovies = useLoaderData().results

  const handleSubmit = () => {
    setSearch(query)
  }

  useEffect(() => {
    if (search) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${search}`)
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
  }, [search])
  console.log(movies)
  if (movies === 0) return null
  return (
    <>
      <Form
        className="header-form"
        method="get"
        name="search"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        <label
          className="header-label"
          htmlFor="searchbar"
        ><button className="btn search-btn" type="submit">
            <Search /></button></label>
        <input
          id="searchbar"
          name="search"
          type="text"
          placeholder="search for a movie"
          onChange={e => setQuery(e.target.value)}
        />
      </Form>
      <MoviesList
        movies={movies}
        title_type={"title"}
        linkDestination={""} />
      <Footer />
    </>
  )
}

export const moviesLoader = async () => {
  const res = await fetch(apiURL)

  if (!res.ok) throw new Error("Oops! Something went wrong, could not fetch movies")

  return res.json()
}
