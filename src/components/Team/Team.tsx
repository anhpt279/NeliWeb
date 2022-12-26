import TeamCard from "../../components/common/Team/TeamCard";
import TeamMobileCard from "../../components/common/Team/TeamMobileCard";
import Button from "../../components/common/Button/Button";

const Teams = () => {
  return (
    <div id="team" className="container-team  team">
      <p className="team-header">Meet our team</p>
      <h1 className="team-title">
        We hire the best people, period. We bring them together in dedicated
        teams that focus on your project alone.
      </h1>
      <div className="grid5 team-member">
        <TeamCard />
      </div>
      <div className="team-slider">
        <TeamMobileCard />
      </div>
      <div className="team-btn">
        <Button variant={"secondary"} href="#contact-form">
          Start Working With Us
        </Button>
      </div>
    </div>
  );
};

export default Teams;
