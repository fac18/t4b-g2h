import React from "react";
import museum from "../../assets/museum.svg";
import * as SC from "./MuseumAreaLink.style";
import { Link } from "react-router-dom";

const MuseumAreaLink = () => {
  return (
    <SC.MuseumLinkContainer>
      <img src={museum} alt="Museum logo" data-testid="museum"/>
      <Link to="/museumlogin">
        <p>Museum Login</p>
      </Link>
    </SC.MuseumLinkContainer>
  );
};

export default MuseumAreaLink;
