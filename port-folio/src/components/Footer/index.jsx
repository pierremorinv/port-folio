import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer>
      <ul className="footer-ul">
        <li className="footer-li">
          <a href="https://www.linkedin.com/in/pierre-morin-219a01209/">
            LinkedIn
          </a>
        </li>

        <li className="footer-li">
          <a href="https://github.com/pierremorinv">Github </a>
        </li>

        <li className="footer-li">
          <a href="mailto:morinpierrevo@gmail.com">Mail</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
