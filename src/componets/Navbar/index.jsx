import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { MenuItems } from "./MenuItems";
import logo from "../../assets/logo.png"
import useScrollPosition from "../../hook/useScrollPosition";
import "./index.css";
import useWindowDimensions from "../../hook/getWindowDimensions"


function Navbar() {
  const [clicked, setClicked] = useState(false)
  const scrollPosition = useScrollPosition();
  const { width } = useWindowDimensions();

  const handleClick = () => {
    setClicked(!clicked)
  };

  const handleNavLinkClickOnMobile = () => {
    if (width <= 768) {
      if (clicked) {
        setClicked(false)
      }
    }
  }

  return (
    <div style={scrollPosition > 0 ? { zIndex: 200 } : null} className="FixNav">
      <nav style={scrollPosition > 0 ? { borderBottom: "white 1px solid" } : null} className="Navbaritems">
        <div className="navbar-logo">
          <img
            src={logo}
            height={"100%"}
            width={"140px"}
            alt="logo"
          />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <MdClose color="white" /> : <FaAlignJustify color="white" />}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={handleNavLinkClickOnMobile}>
                <a className={item.cName} href={item.url}>
                  <b >{item.title}</b>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;