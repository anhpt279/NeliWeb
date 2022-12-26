import ServicesCard from "../../components/common/Services/ServicesCard";
import Button from "../../components/common/Button/Button";
import ServiceCardMobile from "../../components/common/Services/ServicesCardMobile";

const Services = () => {
  return (
    <div id="services" className="container-services services">
      <div className="services-text">
        <p className="services-header">Services</p>
        <h1 className="services-title">
          We are specialized in Javascript and provide solutions in its main
          frameworks
        </h1>
      </div>
      <div className="services-tech">
        <ServicesCard />
      </div>
      <ServiceCardMobile />
      <div className="services-btn">
        <Button variant={"secondary"} href="#contact-form" >
          Start Working With Us
        </Button>
      </div>
    </div>
  );
};

export default Services;
