import React from "react";
import * as SC from "./Social.style";

import Twitter from "../../assets/social-media-logos/twitter.svg";
import LinkedIn from "../../assets/social-media-logos/linkedin.svg";
import Facebook from "../../assets/social-media-logos/facebook.svg";
import Instagram from "../../assets/social-media-logos/instagram.svg";

const Social = () => {
  return (
    <SC.SocialBox>
      <img src={Twitter} title="Twitter" alt="Follow us on Twitter" />
      <img src={LinkedIn} title="LinkedIn" alt="Follow us on LinkedIn" />
      <img src={Facebook} title="Facebook" alt="Follow us on Facebook" />
      <img src={Instagram} title="Instagram" alt="Follow us on Instagram" />
    </SC.SocialBox>
  );
};

export default Social;
