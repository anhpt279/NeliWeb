import LogoMark from "../../../assets/Logomark.png";
import Logomenu from "../../../assets/Logomenu.png";
import { FC, HTMLAttributes, useRef, useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";

const Menu: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const LIST_MENU = ["Home", "Work", "Services", "About", "Team", "Contact"];
  //sections use for the scroll navbar
  const sections: string[] = [
    "home",
    "work",
    "services",
    "about",
    "team",
    "contact",
  ];

  const scrollToMenu = () => {
    if (!checkboxRef.current) return;
    checkboxRef.current.click();
  };

  const onChangeMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpenMenu]);

  return (
    <div className="menu">
      <div className="menu-desktop">
        <a href="#" className="menu-icon">
          <img src={LogoMark.src} className="menu-logo" alt="" />
          <p className="menu-logo-text">neliSoftwares</p>
        </a>

        <div className="menu-main">
          <Scrollspy items={sections} currentClassName="link-active">
            {LIST_MENU.map((menu) => (
              <li className="menu-item" key={menu}>
                <a href={"#" + menu.toLowerCase()}>{menu}</a>
              </li>
            ))}
          </Scrollspy>
        </div>
        <div className="menu-media">
          <a
            href="https://www.facebook.com/nelisoftwares"
            className="icon-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/nelisoftwares/"
            className="icon-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <nav role="navigation" className="navigation">
        <div id="menuToggle">
          <input
            type="checkbox"
            ref={checkboxRef}
            id="checkmenu"
            onChange={onChangeMenu}
          />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <img
                src={Logomenu.src}
                alt="icon menu"
                className="menu-mobile-logo"
              />
            </li>
            <ul className="menu-mobile-list">
              {LIST_MENU.map((menu) => (
                <li className="menu-mobile-item" key={menu}>
                  <a href={"#" + menu.toLowerCase()} onClick={scrollToMenu}>
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
            <div className="menu-mobile-icon">
              <a
                href="https://www.facebook.com/nelisoftwares"
                className="icon-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/nelisoftwares/"
                className="icon-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
