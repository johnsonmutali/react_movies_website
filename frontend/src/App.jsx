//pages
import './App.css'
import Layout from "./components/Layout"
import Home from "./components/Home"
import Movies, { moviesLoader } from "./components/Movies/Movies.jsx"
import MoviesDetails, { moviesDetailsLoader } from "./components/Movies/MoviesDetails"
import Genre, { getGenreLoader } from "./components/Genre"
import GenreMovies, { genreMoviesLoader } from "./components/Genre/GenreMovies"
import Errors from "./components/Errors"
import Tv, { tvLoader } from "./components/Movies/Tv.jsx"
import TvDetails, { tvDetailsLoader } from
  "./components/Movies/TvDetails"
import About from "./components/About"
import Contact, { contactAction } from "./components/Contact"

//react
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useRouteError
} from "react-router-dom"


function ErrorElement() {
  const error = useRouteError()
  return (
    <Errors error={error} />)
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<Layout />}
        errorElement={<ErrorElement />}>
        <Route
          path="/"
          element={<Home />} />
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
        <Route path="*" element={<Errors />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
