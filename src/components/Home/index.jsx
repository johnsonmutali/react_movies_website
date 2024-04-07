import "./index.scss"

//react
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//pages
import Footer from "../Footer"


//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"

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
        setMovies(data.results.slice(0, 10));
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          className="landing-slider"
        >
          {
            movies.map(movie => (
              <SwiperSlide
                className="landing-slider-card"
                key={movie.id}
                style={{
                  backgroundImage:
                    `url(${imgUrl}${movie.backdrop_path})`
                }}>
                <div className="landing-movie">
                  <h1 className="movie-title">
                    {movie.title}
                  </h1>
                  <div className="movie-details">
                    <span className="movie-res">hd</span>
                    <span className="movie-rating">{
                      Math.round(movie.vote_average * 10) / 10
                    }</span>
                    <span className="movie-release">{
                      movie.release_date
                    }</span>
                  </div>
                  <div className="movie-genre">
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="landing-textarea">
          <h2 className="landing-textarea__title">filamu</h2>
          <h4 className="landing-textarea__sub-title">explore movies online for free</h4>
          <p className="landing-textarea__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque.</p>

        </div>
        <div className="landing-explore">
          <h2 className="landing-explore__title">explore different movie categories</h2>
          <p className="landing-explore__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque. Ut pulvinar leo enim, a
            dictum erat posuere et.</p>
          <Link
            to="/movies"
            className="landing-link">
            browse currently trending films
          </Link>
        </div>
        <div className="landing-explore">
          <h2 className="landing-explore__title">explore trending shows</h2>
          <p className="landing-explore__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque. Ut pulvinar leo enim, a
            dictum erat posuere et.</p>
          <Link
            to="/tv"
            className="landing-link">
            browse currently trending shows
          </Link>
        </div>
        <div className="landing-explore">
          <h2 className="landing-explore__title">explore different movie categories</h2>
          <p className="landing-explore__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            pharetra tellus, sit amet ullamcorper massa. Ut pulvinar, dolor sit
            amet sagittis laoreet, arcu lorem pretium velit, sit amet interdum
            tellus est vitae leo. Sed laoreet pretium nunc, sed fringilla lorem
            dictum in. Donec id ligula non enim sagittis accumsan. Phasellus
            vulputate porta dignissim. Aliquam erat volutpat. Donec eu eros sit
            amet urna ultricies malesuada et vitae tellus. Pellentesque
            scelerisque porta libero quis scelerisque. Ut pulvinar leo enim, a
            dictum erat posuere et.</p>
          <Link
            to="/genre"
            className="landing-link">
            browse different categories
          </Link>
        </div>
      </div >
      <Footer />
    </>
  )
}



export default Home;
