import React from "react";
import * as SC from "./Social.style";

import Twitter from "../../assets/social-media-logos/twitter.svg";
import LinkedIn from "../../assets/social-media-logos/linkedin.svg";
import Facebook from "../../assets/social-media-logos/facebook.svg";
import Instagram from "../../assets/social-media-logos/instagram.svg";

const Social = () => {
  return (
    <SC.SocialBox>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={Twitter} title="Twitter" alt="Follow us on Twitter" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={LinkedIn} title="LinkedIn" alt="Follow us on LinkedIn" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={Facebook} title="Facebook" alt="Follow us on Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} title="Instagram" alt="Follow us on Instagram" />
      </a>
    </SC.SocialBox>
  );
};

export default Social;
