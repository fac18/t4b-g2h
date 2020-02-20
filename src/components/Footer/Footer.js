import React from "react";
import Social from "../Social/Social";
import * as SC from "./Footer.style";
import { Link } from "react-router-dom";
import MuseumAreaLink from "../MuseumAreaLink/MuseumAreaLink";

const Footer = () => {
  return (
    <SC.FooterBox>
      <Social />
      <SC.FooterTextBox>
        <ul>
          <li>Gateway 2 Heritage</li>
          <li>
            <a href="mailto:info@andreastern.co.uk">info@g2h.com</a>
          </li>
          <li>
            <a href="tel:0044201234567">+44 (0) 201 234 567</a>
          </li>
        </ul>
      </SC.FooterTextBox>
      <SC.FooterTextBox>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/termsandconditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
        </ul>
      </SC.FooterTextBox>
      {1 === 1 ? <MuseumAreaLink /> : null}
    </SC.FooterBox>
  );
};

export default Footer;
