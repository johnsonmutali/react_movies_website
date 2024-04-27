import "./index.scss";
import Footer from "../Footer"

import {
  NavLink,
  useLoaderData
} from "react-router-dom";

export default function Genre() {
  const genres = useLoaderData().genres
  return (
    <>
      <div className="genre">
        {
          genres.map(genre => (
            <NavLink
              className="genre__card"
              to={genre.id.toString()}
              key={genre.id}>
              <p>
                {genre.name}
              </p>
            </NavLink>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export const getGenreLoader = async () => {
  const res = await
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key={YOUR_API_KEY}&language=en-US")

  if (!res.ok) throw new Error("whelps no genraaaas")

  return res.json()
}