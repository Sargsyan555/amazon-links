import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ImageSlider.module.scss";

const images = [
  "https://via.placeholder.com/1200x500/ff7f7f/333333?text=Slide+1",
  "https://via.placeholder.com/1200x500/77dd77/333333?text=Slide+2",
  "https://via.placeholder.com/1200x500/779ecb/333333?text=Slide+3",
  "https://via.placeholder.com/1200x500/ffb347/333333?text=Slide+4",
  "https://via.placeholder.com/1200x500/d1a3ff/333333?text=Slide+5",
];

const ImageSlider: React.FC = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // Default is 1 image per slide
        breakpoints={{
          768: { slidesPerView: 3 }, // 3 images per slide on screens wider than 768px
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
