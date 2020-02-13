import React from "react";
import * as SC from "../styles/Text.style";
// import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <SC.CenteredText>
      <h2>Our Partners</h2>
      <p>Museum name</p>
      {/* <p>{record.fields.name}</p>
      <Link to="/">
        <a aria-label={record.fields.name}>
          <img alt={record.fields.name}>{record.fields.museum_image}</img>
        </a>
      </Link> */}
    </SC.CenteredText>
  );
};

export default Partners;
