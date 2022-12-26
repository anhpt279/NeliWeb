import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SERVICES_DATA from "./ServicesData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ServiceCardMobile = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {SERVICES_DATA.map((service: any) => {
        return (
          <SwiperSlide key={service.id} className="tech-slide">
            <div className="slide-content">
              <div className="tech-img">
                <img src={service.image.src} alt="tech-img" />
              </div>
              <div className="tech-text">
                <p className="tech-text-title">{service.title}</p>
                <p className="tech-text-des">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceCardMobile;
