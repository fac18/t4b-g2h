import React, { useState, useEffect } from "react";
import filterAll from "../../utils/filterFunctions";
import PropTypes from "prop-types";

const Filter = ({ searchResult, setFilteredResult }) => {
  // could refactor all states to useReducer
  const [collectionValue, setCollectionValue] = useState("");
  const [artistValue, setArtistValue] = useState("");
  const [periodValue, setPeriodValue] = useState("");
  const [mediumValue, setMediumValue] = useState("");
  const [orientationValue, setOrientationValue] = useState("");
  const [colourValue, setColourValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");

  const filteredAllData = filterAll(
    searchResult,
    collectionValue,
    artistValue,
    periodValue,
    mediumValue,
    orientationValue,
    peopleValue,
    colourValue
  );

  useEffect(() => {
    setFilteredResult(filteredAllData);
  }, [
    collectionValue,
    artistValue,
    periodValue,
    mediumValue,
    orientationValue,
    peopleValue,
    colourValue
  ]);

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
      <label id="periodValue">Period/Century</label>
      <input
        type="text"
        id="periodValue"
        value={periodValue}
        onChange={event => setPeriodValue(event.target.value)}
      ></input>
      <label htmlFor="colourValue" id="colourValue">
        Colour/B&W
      </label>
      <select
        type="select"
        id="colourValue"
        value={colourValue}
        onChange={event => setColourValue(event.target.value)}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="">None</option>
        <option value="Colour">Colour</option>
        <option value="B&W">Black & White</option>
      </select>

      <label htmlFor="orientationValue" id="orientationValue">
        Orientation
      </label>
      <select
        type="select"
        id="orientationValue"
        value={orientationValue}
        onChange={event => setOrientationValue(event.target.value)}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="">None</option>
        <option value="Landscape">Landscape</option>
        <option value="Portrait">Portrait</option>
        <option value="Square">Square</option>
      </select>

      <label htmlFor="peopleValue" id="peopleValue">
        People
      </label>
      <select
        type="select"
        id="peopleValue"
        value={peopleValue}
        onChange={event => setPeopleValue(event.target.value)}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="">None</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

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
