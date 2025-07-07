import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./styling/Gallery.css"
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useState, useEffect } from 'react';
import axios from "axios";

function Gallery() {
    const [gallery, setGallery] = useState([
        {}
    ]);
    useEffect(() => {
        axios.get("http://localhost:4000/api/Gallery/load_gallery")
            .then((res) => {
            if (res.data && Array.isArray(res.data)) {
                setGallery(res.data);
            } else {
                console.error("Unexpected response structure:", res.data);
            }
            })
            .catch((err) => console.error("Failed to load gallery:", err));
    }, []);
  return (
    <div id="swiper-div">  {/* Outer wrapper for size control */}
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
        >
            {gallery.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="gallery-slide">
                        <img className="slide-img" src={image.src} alt={image.alt} />
                        <div className="hover-overlay">
                            <span className="caption">{image.desc}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>

  );
}
 export default Gallery;