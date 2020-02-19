import React, { useEffect } from "react";
import * as SC from "./Search.style.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchPage = ({ searchResult }) => {
  if (!searchResult) return <h1>Loading images...</h1>
  const searchRecords = searchResult.records;

  console.log("is this you", searchResult);
  return (
    <SC.SearchStyle>
      {searchRecords.map(record => (
        <Link
          to={`/previewpage?${keyword}=${record.fields.image_id}`}
          key={record.fields.image_id}
        >
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
