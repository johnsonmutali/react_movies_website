import "./index.scss"
//pages
import Footer from "../Footer"
import MovieList from "./MoviesList.jsx"

//react
import { useState, useEffect } from "react"
import { useLoaderData, Link, Form } from "react-router-dom"
import { Search } from "../Icons.jsx"

//from tm
const apiKey = "api_key=0a37faeccee2b6ba9614f84e338a03ed";
const apiURL = "https://api.themoviedb.org/3/tv/popular?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";


export default function Tv() {
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const defaultMovies = useLoaderData().results

    const handleSubmit = () => {
        setSearch(query)
    }

    useEffect(() => {
        if (search) {
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=0a37faeccee2b6ba9614f84e338a03ed&query=${search}`)
                .then(res => {
                    if (!res.ok) throw new Error("couldnt fetch! tv.jsx")
                    return res.json()
                })
                .then(data => {
                    setMovies(data.results)
                })
        } else {
            setMovies(defaultMovies)
        }
    }, [search])

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