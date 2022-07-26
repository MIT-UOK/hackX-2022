import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { MenuItems } from "./MenuItems";
import logo from "../../assets/logo.png"
import useScrollPosition from "../../hook/useScrollPosition";
import "./index.css";



function Navbar() {
  const [clicked, setClicked] = useState(false)
  const scrollPosition = useScrollPosition();

  const handleClick = () => {
    setClicked(!clicked)
  };

  return (
    <div style={scrollPosition > 0 ? { zIndex: 200 } : null} className="FixNav">
      <nav style={scrollPosition > 0 ? { borderBottom: "#47AF73 1px solid" } : null} className="Navbaritems">
        <div className="navbar-logo">
          <img
            src={logo}
            height={"50px"}
            width={"100px"}
            alt="logo"
          />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <MdClose color="white" /> : <FaAlignJustify color="white" />}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <b>{item.title}</b>
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