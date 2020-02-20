import React, { useState, useEffect } from "react";
import * as SC from "./Search.style.js";
import PropTypes from "prop-types";
import Filter from "../Filter/Filter";

const SearchPage = ({
  searchResult,
  setSearchResult,
  filteredResult,
  setFilteredResult
}) => {
  const [filteredRecords, setFilteredRecords] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (!filteredResult) {
      setFilteredRecords(null);
    } else {
      setFilteredRecords(filteredResult.records);
    }
  }, [filteredResult]);

  if (!searchResult) return <h1>No data yet</h1>;
  const searchRecords = searchResult.records;

  //shows records in grid view through mapping on each one and displaying it in 3 columns by X rows to as many as needed
  return (
    <>
      <button onClick={() => setShowFilter(!showFilter)}>Filter options</button>
      {showFilter ? (
        <Filter
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          filteredResult={filteredResult}
          setFilteredResult={setFilteredResult}
        />
      ) : null}
      {filteredRecords ? (
        <SC.SearchStyle>
          {filteredRecords.map(record => (
            <SC.ContentContainer key={record.fields.image_id}>
              {console.log("record in map function = ", record)}
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
            <SC.ContentContainer key={record.fields.image_id}>
              <SC.ImgContainer>
                <SC.ImgInContainer src={record.fields.url} />
              </SC.ImgContainer>
              <p data-testid="first">{record.fields.caption}</p>
            </SC.ContentContainer>
          ))}
        </SC.SearchStyle>
      )}
    </>
  );
};

SearchPage.propTypes = {
  searchResult: PropTypes.object,
  setSearchResult: PropTypes.func,
  filteredResult: PropTypes.object,
  setFilteredResult: PropTypes.func
};
export default SearchPage;
