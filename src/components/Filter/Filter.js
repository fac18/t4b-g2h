import React, { useState, useEffect } from "react";
import filterAll from "../../utils/filterFunctions";
import PropTypes from "prop-types";
// import * as SC from "./Filter.style";

const Filter = ({ searchResult }) => {
  // once working, should refactor all states to useReducer
  const [collectionValue, setCollectionValue] = useState("");
  // const [artistValue, setArtistValue] = useState(null);
  filterAll(searchResult, collectionValue);

  // useEffect(() => {
  //   filterAll(searchResult, collectionValue);
  // }, [collectionValue]);

  return (
    <form>
      <label id="collectionValue">CollectionValue</label>
      <input
        type="text"
        id="collectionValue"
        value={collectionValue}
        onChange={event => setCollectionValue(event.target.value)}
      ></input>
      {/* <label id="artistValue">ArtistValue / Creator</label>
      <input
        type="text"
        id="artistValue"
        value={artistValue}
        onChange={event => setArtistValue(event.target.value)}
      ></input> */}
    </form>
  );
};

Filter.propTypes = {
  searchResult: PropTypes.array
};

export default Filter;
