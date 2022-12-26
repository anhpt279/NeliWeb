import React, { useState } from "react";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/Slider2.png";
import slide3 from "../../assets/slider3.png";
import goIcon from "../../assets/go.svg";
import gitIcon from "../../assets/github.svg";
import figmaIcon from "../../assets/figma.svg";
import Button from "../../components/common/Button/Button";

function Work() {
  const [slideStyle, setSlideStyle] = useState({});

  const handleMoveSlide = (index: number) => {
    let size = -index * 100;
    setSlideStyle({ transform: `translateX(${size}%)` });
  };
  return (
    <div className="work" id="work">
      <p className="content-work">WORK</p>
      <p className="work-title">
        Check-out our demo
        <br className="br-mobile" /> project
        <br className="br-desktop" />
        and view the
        <br className="br-mobile" /> code system in its
        <br className="br-mobile" /> entirety!
      </p>
      <div className="btn-group">
        <Button href="#contact-form" variant="inherent">
          <img src={goIcon.src} alt="gomarket icon" className="btn-icon" />
          View Project
        </Button>
        <Button href="#contact-form" variant="inherent">
          <img src={figmaIcon.src} alt="figma icon" className="btn-icon" />
          View Design
        </Button>
        <Button href="#contact-form" variant="inherent">
          <img src={gitIcon.src} alt="github icon" className="btn-icon" />
          View Code
        </Button>
      </div>

      <div className="work-slide">
        <div className="work-slide-warper">
          <div className="work-slide-image" style={slideStyle}>
            <img src={slide1.src} alt="slide-1" className="side-image" />
            <img src={slide2.src} alt="" className="side-image" />
            <img src={slide3.src} alt="" className="side-image" />
          </div>
        </div>

        <span className="dots-group">
          <div className="dot-slide" onClick={() => handleMoveSlide(0)}></div>
          <div className="dot-slide" onClick={() => handleMoveSlide(1)}></div>
          <div className="dot-slide" onClick={() => handleMoveSlide(2)}></div>
        </span>
      </div>
      <div className="hr-work"></div>
    </div>
  );
}

export default Work;
