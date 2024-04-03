export default function useFetch({ obj, title_type }) {
    return (
        <>
            <div className="movies" >
                <div className="movies-container">
                    {
                        obj.map(movie => (
                            <Link
                                to={movie.id.toString()}
                                key={movie.id}
                                preventScrollReset={true}>
                                <div key={movie.id} className="movie">
                                    <div className="movie__thumbnail img-container">
                                        <img
                                            src={imgUrl + movie.poster_path}
                                            className="img"
                                            alt={movie.title_type + " poster"}
                                        />
                                    </div>
                                    <div className="movie__details">
                                        <h2>{movie.title_type}</h2>
                                    </div>
                                    <span className="rating">{Math.round(movie.vote_average * 10) / 10}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

