import "./index.scss"

//react
import { useState, useEffect } from "react"

//pages
import Footer from "../Footer"

//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"

import "swiper/scss"
import "swiper/scss/effect-coverflow"
import "swiper/scss/pagination"


const imgUrl = "https://image.tmdb.org/t/p/w500";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '0a37faeccee2b6ba9614f84e338a03ed';
        const response = await
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0a37faeccee2b6ba9614f84e338a03ed`);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (error) { console.error(error); }
    }; fetchMovies();
  }, []);

  console.log(movies[0])

  return (
    <>
      <div className="home">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadow: true
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="landing-slider"
        >
          {
            movies.map(movie => (
              <SwiperSlide
                className="landing-slider__card"
                key={movie.id}
                style={{
                  backgroundImage:
                    `url(${imgUrl}${movie.backdrop_path})`
                }}>
                <div className="landing_movie">
                  <h1 className="movie__title">
                    {movie.title}
                  </h1>
                  <div className="movie__details">
                    <span className="movie__res">hd</span>
                    <span className="movie__rating">{
                      Math.round(movie.vote_average * 10) / 10
                    }</span>
                    <span className="movie__release">{
                      movie.release_date
                    }</span>
                  </div>
                  <div className="movie__genre">
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div >
      <Footer />
    </>
  )
}



export default Home;
