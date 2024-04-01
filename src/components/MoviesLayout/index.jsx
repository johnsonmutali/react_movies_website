import "./index.scss";
import {
  NavLink,
  useLoaderData
} from "react-router-dom";
import { Hamburger } from "../Icons.jsx"

const MoviesLayout = () => {

  const genres = useLoaderData().genres
  return (

    <div className="movies-layout">
      <div className="flex">
        <div className="sidebar">
          <ul className="sidebar__list">
            {
              genres.map(genre => (
                <li className="sidebar__item" key={genre.id}>
                  <NavLink to={genre.name}>{genre.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
      <div className="footer"></div>
    </div >
  )
}

export default MoviesLayout

export const genreLoader = async () => {
  const res = await
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0a37faeccee2b6ba9614f84e338a03ed&language=en-US")

  if (!res.ok) throw new Error("whelps no genraaaas")

  return res.json()
}