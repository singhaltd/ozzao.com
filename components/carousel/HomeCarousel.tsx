import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
export default function HomeCarousel() {
    return (
        <Swiper className='w-full'>
            <SwiperSlide>
                <img src="https://icms-image.slatic.net/images/ims-web/3d71db11-ee04-49af-99fa-26e53b2eea9a.jpg" className='w-full' alt="" />
            </SwiperSlide>
        </Swiper>
    );
};