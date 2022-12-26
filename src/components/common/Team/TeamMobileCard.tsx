import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import TEAM_DATA from "./TeamData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TeamMobileCard = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      slidesPerGroup={2}
      modules={[Navigation]}
      className="mySwiper"
    >
      {TEAM_DATA.map((teamItem: any) => {
        return (
          <SwiperSlide key={teamItem.id} className="team-cards-mobile">
            <div className="team-img">
              <img src={teamItem.image.src} alt="" />
            </div>
            <div className="team-text">
              <div className="member-name">{teamItem.name}</div>
              <div className="member-job">{teamItem.job}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TeamMobileCard;
