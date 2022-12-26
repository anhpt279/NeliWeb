import { FC, HTMLAttributes } from "react";

const Home: FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div id="home" className="home">
      <h1 className="title-home">
        TRANSFORM <br className="br-mobile" />
        YOUR <br className="br-desktop" />
        SOFTWARE <br className="br-mobile" />
        SOLUTION
        <br className="br" />
        BECOME MORE
      </h1>
      <div className="container-slide">
        <div className="slide-home">
          <p className="item-slide-home">UNIQUE</p>
          <p className="item-slide-home">MEMORABLE</p>
          <p className="item-slide-home">AWESOME</p>
          <p className="item-slide-home">EFFICENT</p>
          <p className="item-slide-home">INSPIRITIONAL</p>
        </div>
      </div>
      <h1 className="content-home">
        WE PROVIDE END-TO-END
        <br className="br-mobile" /> JAVASCRIPT DEVELOPEMENT
        <br className="br-mobile" /> SERVICES <br className="br-desktop" />
        FOR YOUR BUSINESS
      </h1>
      <hr className="hr-home" />
    </div>
  );
};

export default Home;
