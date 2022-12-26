import React from "react";

const ServicesItem = (props: any) => {
  return (
    <div className="services-item">
      <div className="item-img">
        <img src={props.image.src} alt="tech-item" />
      </div>
      <div className="item-text">
        <p className="item-title">{props.title}</p>
        <p className="item-description">{props.description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
