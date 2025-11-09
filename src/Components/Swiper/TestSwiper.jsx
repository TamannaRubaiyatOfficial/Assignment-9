import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const TestSwiper = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-center text-2xl font-bold mb-6">🐾 Test Swiper Slider</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2500 }}
        loop={true}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestSwiper;
