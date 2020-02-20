import React, { useEffect } from "react";
import * as Text from "../styles/Text.style";
import * as SC from "./Search.style.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchPage = ({ searchResult, keyword, setKeyword, location }) => {
  if (!searchResult) return <h1>Loading images...</h1>;
  setKeyword(location.search.split("=")[1]);
  const searchRecords = searchResult.records; //shows records in grid view through mapping on each one and displaying it in 3 columns by X rows to as many as needed

  console.log("is this you", searchResult);
  return (
    <>
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
              <a data-testid="first">{record.fields.caption}</a>
            </SC.ContentContainer>
          </Link>
        ))}
      </SC.SearchStyle>
    </>
  );
};

SearchPage.propTypes = {
  searchResult: PropTypes.array
};
export default SearchPage;
