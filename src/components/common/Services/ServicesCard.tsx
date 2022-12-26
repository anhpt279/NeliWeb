import SERVICES_DATA from "./ServicesData";
import ServicesItem from "./ServicesItem";

const ServicesCard = () => {
  return (
    <>
      {SERVICES_DATA.map((serviceValue: any) => (
        <ServicesItem
          key={serviceValue.id}
          image={serviceValue.image}
          title={serviceValue.title}
          description={serviceValue.description}
        />
      ))}
    </>
  );
};

export default ServicesCard;
