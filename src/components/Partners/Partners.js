import React from "react";
import * as SC from "../Search/Search.style";
import * as Style from "../styles/Text.style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Partners = ({ museumData }) => {
  if (!museumData) return <h1>Loading...</h1>;
  const museumRecord = museumData.records;
  return (
    <>
      <Style.CenteredText>
        <h2>Our Partners</h2>
      </Style.CenteredText>
      <SC.SearchStyle>
        {museumRecord.map(record => (
          <Link
            to={`/museuminfo/${record.fields.museum_id}`}
            key={record.fields.museum_id}
          >
            <SC.ContentContainer key={record.fields.museum_image}>
              <SC.ImgContainer>
                <SC.ImgInContainer
                  alt={record.fields.name}
                  src={record.fields.museum_image}
                />
              </SC.ImgContainer>
              <Style.TextDeco>{record.fields.name}</Style.TextDeco>
            </SC.ContentContainer>
          </Link>
        ))}
      </SC.SearchStyle>
    </>
  );
};

Partners.propTypes = {
  museumData: PropTypes.object
};

export default Partners;
