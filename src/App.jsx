import { useState } from 'react'
import './App.css'
import Layout, { searchAction } from "./components/Layout"
import MoviesLayout, { genreLoader } from "./components/MoviesLayout"
import Home from "./components/Home"
import Movies, { moviesLoader } from "./components/Movies/Movies.jsx"
import MoviesDetails, { moviesDetailsLoader } from "./components/Movies/MoviesDetails"
import Genre from "./components/Movies/Genre"
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
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = query => {
    setSearchQuery(query)
  }

  return (
    <RouterProvider router={createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={
          <Layout
            onSearch={handleSearch}
            action={searchAction} />
        }>
          <Route index element={<Home />} />
          <Route
            element={<MoviesLayout />}
            errorElement={<ErrorElement />}
            loader={genreLoader}
          >
            <Route
              path="movies"
              element={<Movies query={searchQuery} />}
              loader={moviesLoader}
            />
            <Route
              path=":id"
              element={<MoviesDetails />}
              loader={moviesDetailsLoader}
            />
            <Route
              path=":genre"
              element={<Genre />}
            />
          </Route>
          <Route
            path="tv"
            element={<MoviesLayout />}
            errorElement={<ErrorElement />}
            loader={genreLoader}
          >
            <Route
              index
              element={<Tv />}
              loader={tvLoader}
            />
            <Route
              path=":id"
              element={<TvDetails />}
              loader={tvDetailsLoader}
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route
            path="contact"
            element={<Contact />}
            action={contactAction} />
          <Route path="*" element={<ErrorNotFound />} />
        </Route >
      )
    )} />
  )
}

export default App
