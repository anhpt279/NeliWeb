import FounderImg from "../../assets/founder1.png";
import about1 from "../../assets/Neli-photo-1.svg";
import about2 from "../../assets/Neli-photo-2.svg";
import about3 from "../../assets/Neli-photo-3.svg";
import arrowToRight from "../../assets/arrow-right.svg";
import arrowToLeft from "../../assets/arrow-left.svg";
import { useEffect, useState } from "react";

const DEFAULTS_SLIDER_POSITION = 0;
const PERCENT_SLIDER_POSITION = 81;

const About = () => {
  const [sizeSliderAbout, setSizeSliderAbout] = useState(0);
  const [slideStyle, setSlideStyle] = useState({});

  useEffect(() => {
    if (sizeSliderAbout > DEFAULTS_SLIDER_POSITION) {
      setSizeSliderAbout(DEFAULTS_SLIDER_POSITION);
      setSlideStyle({ transform: `translateX(${sizeSliderAbout}%)` });
    } else {
      if (sizeSliderAbout <= -PERCENT_SLIDER_POSITION * 2) {
        setSizeSliderAbout(-PERCENT_SLIDER_POSITION * 2);
        setSlideStyle({ transform: `translateX(${sizeSliderAbout}%)` });
      } else {
        setSlideStyle({ transform: `translateX(${sizeSliderAbout}%)` });
      }
    }
  }, [sizeSliderAbout]);

  return (
    <div id="about" className="about">
      <div className="header-content">
        <p className="about-header">About</p>
        <h1 className="about-title">
          We build software solutions that set new industry standards.{" "}
          <br className="br-title" /> At lightning speed.
        </h1>
        <p className="title-active">Making the impossible possible.</p>
      </div>

      <div className="container about-ceo">
        <div className="about-slide">
          <div className="controller-slide">
            <img
              src={arrowToLeft.src}
              alt="arrow-to-left"
              width={"100%"}
              height={"100%"}
              className={`arrow-to ${
                sizeSliderAbout === -162 ? "disabled-btn" : ""
              }`}
              onClick={() =>
                setSizeSliderAbout(
                  (sizeSliderAbout) => sizeSliderAbout + PERCENT_SLIDER_POSITION
                )
              }
            />
            <img
              src={arrowToRight.src}
              alt="arrow-to"
              width={"100%"}
              height={"100%"}
              className={`arrow-to-right ${
                sizeSliderAbout === -162 ? "disabled-btn" : ""
              }`}
              onClick={() =>
                setSizeSliderAbout(
                  (sizeSliderAbout) => sizeSliderAbout - PERCENT_SLIDER_POSITION
                )
              }
            />
          </div>
          <div
            className={`about-slide-wraper ${
              sizeSliderAbout === -162 ? "wraper-end" : ""
            }`}
          >
            <div
              className={`about-slide-image ${
                sizeSliderAbout === -162 ? "slide-end-img" : ""
              }`}
              style={slideStyle}
            >
              <img
                alt="about-image-1"
                src={about2.src}
                height="100%"
                width="100%"
                srcSet={about1.src + " 900w"}
              />
              <img
                alt={"about-image-2"}
                src={about2.src}
                height={"100%"}
                width={"100%"}
                srcSet={about2.src + " 900w"}
              />
              <img
                alt={"about-image-3"}
                src={about3.src}
                height={"100%"}
                width={"100%"}
                srcSet={about3.src + " 900w"}
              />
            </div>
          </div>
        </div>
        <div className="ceo-title">
          <h1>Meet the Founder</h1>
          <p className="ceo-title-desc">
            Graduated in software engineering from Polytechnique Montréal and
            now with over 10 years of experience, he successfully established
            and ran his own company neliSoftwares since 2017.
          </p>
        </div>
        <div className="ceo-content">
          <div className="img-ceo">
            <img src={FounderImg.src} alt="" />
          </div>
          <div className="info-ceo">
            <div className="ceo-header">
              <div className="info-ceo-title">
                <p className="ceo-name">KÉVIN PÉRARD</p>
                <p className="ceo-vacancy">CEO & Founder</p>
              </div>
              <div className="header-icon-li">
                <a
                  href="https://www.linkedin.com/in/kevinperard/"
                  className="icon-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="short-line"></div>
            <div className="ceo-description">
              <p>
                Founded in 2017 by Kévin Perard, neliSoftwares originally was a
                start-up technology company based in Montreal, Canada.{" "}
              </p>
              <p>
                After people noticed the quality of the software development,
                the company decided to focus on it to provide others enterprises
                the same great services and support.
              </p>
              <p>
                neliSoftware&#39;s business philosophy is to assure the highest
                quality product, total client satisfaction, timely delivery of
                solutions, and the best quality/price ratio found in the
                industry.
              </p>
              <p>
                We are working with clients around the globe, with different
                timezones without any communication issues for many years.
              </p>
              <p>
                Each project has a team leader assigned, checking on a daily
                basis the code quality and pertinence, making sure all the
                deadlines will be reached on time for your project.
              </p>
            </div>
          </div>
        </div>
        <div className="br-about"></div>
      </div>
    </div>
  );
};

export default About;
