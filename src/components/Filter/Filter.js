import React, { useState, useEffect } from "react";
import filterAll from "../../utils/filterFunctions";
import PropTypes from "prop-types";
// import * as SC from "./Filter.style";

const Filter = ({ searchResult, filteredResult, setFilteredResult }) => {
  // once working, should refactor all states to useReducer
  const [collectionValue, setCollectionValue] = useState("");
  const [artistValue, setArtistValue] = useState("");
  const [mediumValue, setMediumValue] = useState("");

  // const filteredAllDataPromise = new Promise((resolve, reject) => {

  // });

  const filteredAllData = filterAll(
    searchResult,
    collectionValue,
    artistValue,
    mediumValue
  );

  useEffect(() => {
    // console.log(searchResult);
    // setFilteredResult(searchResult);
    // if
    setFilteredResult(filteredAllData);

    // filteredAllData.then(setFilteredResult(filteredAllData));
    // filteredAllData;
    console.table("searchResult in filter.js = ", searchResult);
    console.table("filteredResult in Filter.js = ", filteredResult);
    // console.log("filteredAllData = ", filteredAllData);
    // console.log(filteredAllData);
  }, [collectionValue, artistValue, mediumValue]);

  return (
    <form>
      <label id="collectionValue">Collection</label>
      <input
        type="text"
        id="collectionValue"
        value={collectionValue}
        onChange={event => setCollectionValue(event.target.value)}
      ></input>
      <label id="artistValue">Artist/Creator</label>
      <input
        type="text"
        id="artistValue"
        value={artistValue}
        onChange={event => setArtistValue(event.target.value)}
      ></input>
      <label id="mediumValue">Medium</label>
      <input
        type="text"
        id="mediumValue"
        value={mediumValue}
        onChange={event => setMediumValue(event.target.value)}
      ></input>
    </form>
  );
};

Filter.propTypes = {
  searchResult: PropTypes.object,
  setSearchResult: PropTypes.func,
  filteredResult: PropTypes.object,
  setFilteredResult: PropTypes.func
};

export default Filter;
