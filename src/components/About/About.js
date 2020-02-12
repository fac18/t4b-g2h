import React from "react";
import logo from "../../assets/g2h-logo.svg";
import * as SC from "./About.style";

const About = () => {
  return (
    <SC.AboutBox>
      <h2>About us</h2>
      <SC.AboutLogo src={logo} alt="Gateway2Heritage logo" />
      <p>
        The aim of The Gateway is to provide a business opportunity for small
        and medium-sized cultural heritage institutions (SMIs) which will
        sustain and grow commercial value over the next decade. Focusing on
        creating a platform for the aggregated digitised visual content found in
        small and medium-sized cultural institutions, this project, initiated by
        Andrea, offers the heritage sector the opportunity to promote their
        collections to a wider audience for commercial licensing whilst
        providing a space for intra-sector communication.
      </p>
    </SC.AboutBox>
  );
};

export default About;
