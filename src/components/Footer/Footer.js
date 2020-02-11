import React from "react";
import Social from "../Social/Social";
import * as SC from "./Footer.style";

const Footer = () => {
  return (
    <SC.FooterBox>
      <Social />
    
    <SC.FooterTextBox>
        <ul>
            <li>Gateway 2 Heritage</li>
            <li>info@g2h.com</li>
            <li>+44 (0) 201 234 567</li>
        </ul>
    </SC.FooterTextBox>
    <SC.FooterTextBox>
        <ul>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
        </ul>
    </SC.FooterTextBox>
    </SC.FooterBox>
  );
};

export default Footer;