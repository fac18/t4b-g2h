import React, { useState, useEffect } from "react";
import * as SC from "../styles/Text.style";
import PropTypes from "prop-types";

const MuseumInfo = props => {
  const [museumInfo, setMuseumInfo] = useState(null);
  useEffect(() => {
    setMuseumInfo(props.location.partnerProps);
  }, [props.location.partnerProps]);
  return (
    <>
      {!museumInfo ? (
        <h1>Loading...</h1>
      ) : (
        <SC.CenteredText key={museumInfo.museum_id}>
          <h2>{museumInfo.name}</h2>
          <img alt={museumInfo.name} src={museumInfo.image} />
          <p>Description: {museumInfo.description}</p>
          <p>
            Website: <a href={museumInfo.website}>{museumInfo.website}</a>
          </p>
        </SC.CenteredText>
      )}
    </>
  );
};

MuseumInfo.propTypes = {
  location: PropTypes.object
};
export default MuseumInfo;
