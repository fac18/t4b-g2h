import React, { useState, useEffect } from "react";
import * as SC from "../styles/Text.style";

const MuseumInfo = props => {
  const [museumInfo, setMuseumInfo] = useState(null);
  useEffect(() => {
    setMuseumInfo(props.location.partnerProps);
  }, []);
  if (!museumInfo) return <h1>Loading...</h1>;
  console.log(props.location.partnerProps);
  return (
    <SC.CenteredText key={museumInfo.museum_id}>
      <h2>{museumInfo.name}</h2>
      <img src={museumInfo.image} />
      <p>Description: {museumInfo.description}</p>
      <p>
        Website: <a href={museumInfo.website}>{museumInfo.website}</a>
      </p>
    </SC.CenteredText>
  );
};

export default MuseumInfo;
