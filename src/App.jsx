import './App.css'
import Layout from "./components/Layout"
import Home from "./components/Home"
import Movies, { moviesLoader } from "./components/Movies/Movies.jsx"
import MoviesDetails, { moviesDetailsLoader } from "./components/Movies/MoviesDetails"

import Genre, { getGenreLoader } from "./components/Genre"
import GenreMovies, { genreMoviesLoader } from "./components/Genre/GenreMovies"
import ErrorElement from "./components/Errors/ErrorElement"
import ErrorNotFound from "./components/Errors/ErrorNotFound"
import Tv, { tvLoader } from "./components/Movies/Tv.jsx"
import TvDetails, { tvDetailsLoader } from
    "./components/Movies/TvDetails"
import About from "./components/About"
import Contact, { contactAction } from "./components/Contact"


import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom"


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route
                    path="movies"
                    element={<Movies />}
                    loader={moviesLoader} />
                <Route
                    path="movies/:id"
                    element={<MoviesDetails />}
                    loader={moviesDetailsLoader}
                />
                <Route
                    path="tv"
                    element={<Tv />}
                    loader={tvLoader} />
                <Route
                    path="tv/:id"
                    element={<TvDetails />}
                    loader={tvDetailsLoader}
                />
                <Route
                    path="genre"
                    element={<Genre />}
                    loader={getGenreLoader}
                />
                <Route
                    path="genre/:id"
                    element={<GenreMovies />}
                    loader={genreMoviesLoader}
                />
                <Route path="about" element={<About />} />
                <Route
                    path="contact"
                    element={<Contact />}
                    action={contactAction} />
                <Route path="*" element={<ErrorNotFound />} />
            </Route>
        )
    )

    return (
        <RouterProvider router={router} />
    )
}

export default App
