import "./index.scss";
import {
    NavLink,
    useLoaderData
} from "react-router-dom";

export default function Genre() {
    const genres = useLoaderData().genres
    return (
        <div className="genre">
            {
                genres.map(genre => (
                    <div className="genre__card"
                        key={genre.id}>
                        <NavLink to={genre.id.toString()}>
                            {genre.name}
                        </NavLink>
                    </div>
                ))
            }
        </div>
    )
}

export const getGenreLoader = async () => {
    const res = await
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0a37faeccee2b6ba9614f84e338a03ed&language=en-US")

    if (!res.ok) throw new Error("whelps no genraaaas")

    return res.json()
}