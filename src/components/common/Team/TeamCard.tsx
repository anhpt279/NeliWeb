import TEAM_DATA from "./TeamData";
import Arrow from "../../../assets/Media/Arrow-1.png";

const TeamCard = () => {
  return (
    <>
      {TEAM_DATA.map((teamItem: any) => {
        return (
          <div key={teamItem.id} className="team-cards">
            <div className="overlay">
              <div className="overlay-content">
                <a href="#contact-form" className="overlay-link">
                  Start Working With Us
                  <img
                    className="arrow-icon"
                    src={Arrow.src}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
            </div>
            <div className="team-img">
              <img src={teamItem.image.src} alt="" />
            </div>
            <div className="team-text">
              <div className="member-name">{teamItem.name}</div>
              <div className="member-job">{teamItem.job}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
