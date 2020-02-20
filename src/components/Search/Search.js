import React, { useEffect, useState } from "react";
import * as Text from "../styles/Text.style";
import * as SC from "./Search.style.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";

const SearchPage = ({
  searchResult,
  filteredResult,
  setFilteredResult,
  keyword,
  setKeyword,
  location
}) => {
  const [filteredRecords, setFilteredRecords] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  // console.trace("search result in search.js is ", searchResult);

  useEffect(() => {
    if (!filteredResult) {
      setFilteredRecords(null);
      // console.log("filteredRecords = ", filteredRecords);
    } else {
      setFilteredRecords(filteredResult.records);
      // console.log(filteredResult.records);
    }
  }, [filteredResult]);

  if (!searchResult) return <h1>Loading images...</h1>;
  setKeyword(location.search.split("=")[1]);
  const searchRecords = searchResult.records; //shows records in grid view through mapping on each one and displaying it in 3 columns by X rows to as many as needed

  return (
    <>
      <button onClick={() => setShowFilter(!showFilter)}>Filter options</button>
      {showFilter ? (
        <Filter
          searchResult={searchResult}
          filteredResult={filteredResult}
          setFilteredResult={setFilteredResult}
        />
      ) : null}
      {filteredRecords ? (
        <SC.SearchStyle>
          {filteredRecords.map(record => (
            <SC.ContentContainer key={record.fields.image_id}>
              {/* {console.log("record in filter map function = ", record)} */}
              <SC.ImgContainer>
                <SC.ImgInContainer src={record.fields.url} />
              </SC.ImgContainer>
              <p data-testid="first">{record.fields.caption}</p>
            </SC.ContentContainer>
          ))}
        </SC.SearchStyle>
      ) : (
        <SC.SearchStyle>
          {searchRecords.map(record => (
            <Link
              to={`/previewpage?${keyword}=${record.fields.image_id}`}
              key={record.fields.image_id}
            >
              <SC.ContentContainer key={record.fields.image_id}>
                {/* {console.log("record in searchrecords map function = ", record)} */}
                <SC.ImgContainer>
                  <SC.ImgInContainer src={record.fields.url} />
                </SC.ImgContainer>
                <p data-testid="first">{record.fields.caption}</p>
              </SC.ContentContainer>
            </Link>
          ))}
        </SC.SearchStyle>
      )}
    </>
  );
};

SearchPage.propTypes = {
  searchResult: PropTypes.object,
  filteredResult: PropTypes.object,
  setFilteredResult: PropTypes.func
};
export default SearchPage;
