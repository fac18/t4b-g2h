import React from "react";
import * as SC from "./Search.style.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchPage = ({ searchResult }) => {
  if (!searchResult) return <h1>No data yet</h1>;
  const searchRecords = searchResult.records;

  //shows records in grid view through mapping on each one and displaying it in 3 columns by X rows to as many as needed
  return (
    <SC.SearchStyle>
      {searchRecords.map(record => (
        <Link to={{ pathname: "/previewpage", 
        searchImageProps: {
          image_id: record.fields.image_id,
          caption: record.fields.caption,
          description: record.fields.description,
          collection: record.fields.collection,
          medium: record.fields.medium,
          creator: record.fields.creator,
          dateOfCreation: record.fields.create_date,
          period: record.fields.period,
          copyrightStatus: record.fields.copyright_status,
          copyrightHolder: record.fields.copyright_holder,
          credit: record.fields.credit,
          keywords: record.fields.keywords,
          imageUrl: record.fields.url
        }
        }} key={record.fields.image_id}>
          <SC.ContentContainer key={record.fields.image_id}>
            <SC.ImgContainer>
              <SC.ImgInContainer src={record.fields.url} />
            </SC.ImgContainer>
            <p data-testid="first">{record.fields.caption}</p>
          </SC.ContentContainer>
        </Link>
      ))}
    </SC.SearchStyle>
  );
};

SearchPage.propTypes = {
  searchResult: PropTypes.array
};
export default SearchPage;
