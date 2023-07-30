import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <ul className="nav-bar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Projects"}>Mes projects</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>{" "}
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
