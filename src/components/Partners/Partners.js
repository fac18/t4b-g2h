import React from "react";
import * as SC from "../Search/Search.style";
import * as Style from "../styles/Text.style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Partners = ({ museumData, setChosenMuseum }) => {
  console.log("this is museumData", museumData);

  if (!museumData) return <h1>Loading...</h1>;
  const museumRecord = museumData.records;
  return (
    <>
      <Style.CenteredText>
        <h2>Our Partners</h2>
      </Style.CenteredText>
      <SC.SearchStyle>
        {museumRecord.map(record => (
          <SC.ContentContainer key={record.fields.museum_id}>
            <Link
              to={`/museuminfo/${record.fields.museum_id}`}
              onClick={() => {
                setChosenMuseum({
                  museum_id: record.fields.museum_id,
                  name: record.fields.name,
                  image: record.fields.museum_image,
                  description: record.fields.description,
                  website: record.fields.website
                });
              }}
            >
              <SC.ImgContainer>
                <SC.ImgInContainer
                  alt={record.fields.name}
                  src={record.fields.museum_image}
                />
              </SC.ImgContainer>
              <p>{record.fields.name}</p>
            </Link>
          </SC.ContentContainer>
        ))}
      </SC.SearchStyle>
    </>
  );
};

Partners.propTypes = {
  museumData: PropTypes.object
};

export default Partners;
