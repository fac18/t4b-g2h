import React from "react";
import * as SC from "./Social.style";

import Twitter from "../../assets/social-media-logos/twitter.svg";
import LinkedIn from "../../assets/social-media-logos/linkedin.svg";
import Facebook from "../../assets/social-media-logos/facebook.svg";
import Instagram from "../../assets/social-media-logos/instagram.svg";

const Social = () => {
  return (
    <SC.SocialBox>
      <img src={Twitter} alt="Follow us on Twitter" />
      <img src={LinkedIn} alt="Follow us on LinkedIn" />
      <img src={Facebook} alt="Follow us on Facebook" />
      <img src={Instagram} alt="Follow us on Instagram" />
    </SC.SocialBox>
  );
};

export default Social;
