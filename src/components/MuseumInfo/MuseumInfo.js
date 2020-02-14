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
    <SC.CenteredText>
      <p>Museum Name</p>
      <p>Description</p>
      {/* <p>Website: <a href={}>link</a></p> */}
    </SC.CenteredText>
  );
};

export default MuseumInfo;
