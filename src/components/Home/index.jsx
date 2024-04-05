import "./index.scss"
//pages
import Footer from "../Footer"

//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverf} from "swiper/react"
import "swiper/scss"

const Home = () => {
    return (
        <>
            <div className="home">
                <Swiper spaceBetween={50} slidesPerView={3} > <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </>
    )
}

export default Home