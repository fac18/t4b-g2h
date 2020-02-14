import React, { useState } from "react";
import * as SC from "../styles/Text.style";
// import { Link } from "react-router-dom";

const Partners = () => {
  const [museumData, setMuseumData] = useState(null);

  const museumDataCall = async () => {
    await (await fetch("/.netlify/functions/getMuseumData/getMuseumData.js"))
      .json()
      .then(data => setMuseumData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    museumDataCall();
  }, []);
  return (
    <SC.CenteredText>
      <button onClick={museumDataCall}>Data</button>
      {console.log(museumData)}
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
