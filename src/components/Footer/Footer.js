import React from "react";
import Social from "../Social/Social";
import * as SC from "./Footer.style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <SC.FooterBox>
      <Social />
      <SC.FooterTextBox>
        <ul>
          <li>Gateway 2 Heritage</li>
          <li>
            <a href="mailto:info@g2h.com">info@g2h.com</a>
          </li>
          <li>
            <a href="tel:0044201234567">+44 (0) 201 234 567</a>
          </li>
        </ul>
      </SC.FooterTextBox>
      <SC.FooterTextBox>
        <ul>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/termsandconditions">
            <li>Terms and Conditions</li>
          </Link>
          <Link to="/privacypolicy">
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </SC.FooterTextBox>
    </SC.FooterBox>
  );
};

export default Footer;
