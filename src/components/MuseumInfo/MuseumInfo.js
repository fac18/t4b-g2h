import React from "react";
import * as SC from "../styles/Text.style";
import PropTypes from "prop-types";

const MuseumInfo = ({ match, museumData }) => {
  const id = match.params.id;
  if (!museumData) return <h1>Loading...</h1>;
  const filteredMuseumData = museumData.records.filter(museum => {
    return museum.fields.museum_id === Number(id);
  });

  return (
    <>
      {!id ? (
        <h1>Loading...</h1>
      ) : (
        <SC.CenteredText key={filteredMuseumData[0].fields.museum_id}>
          <h2>{filteredMuseumData[0].fields.name}</h2>
          <img
            alt={filteredMuseumData[0].fields.name}
            src={filteredMuseumData[0].fields.museum_image}
          />
          <p>Description: {filteredMuseumData[0].fields.description}</p>
          <p>
            Website:{" "}
            <SC.TextDeco href={filteredMuseumData[0].fields.website}>
              {filteredMuseumData[0].fields.website}
            </SC.TextDeco>
          </p>
        </SC.CenteredText>
      )}
    </>
  );
};

MuseumInfo.propTypes = {
  chosenMuseum: PropTypes.object
};
export default MuseumInfo;
