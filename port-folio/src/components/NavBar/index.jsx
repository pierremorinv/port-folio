import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/cv"}>Mon CV</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
