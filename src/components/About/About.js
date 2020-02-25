import React from "react";
import logo from "../../assets/g2h-logo.svg";
import * as SC from "./About.style";

const About = () => {
  return (
    <SC.AboutBox>
      <h2>About us</h2>
      <SC.AboutLogo src={logo} alt="Gateway2Heritage logo" />
      <p>
        The Gateway brings together the image collections of numerous cultural
        and heritage organisations across Britain. Together their images tell
        stories of the British Isles from pre-historic times to the present
        through the different media of art, photography, design and
        architecture, and narrate the growth and development of the country,
        region by region, community by community across the centuries.
      </p>
    </SC.AboutBox>
  );
};

export default About;
