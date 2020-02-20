import React, { useState, useEffect } from "react";
import { filterAll } from "../../utils/filterFunctions";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as Btn from "../styles/Buttons.style";
import * as SC from "./Filter.style";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
});

export default function Filter({ searchResult, setFilteredResult }) {
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

  const clearFilters = event => {
    event.preventDefault();
    setCollectionValue("");
    setArtistValue("");
    setPeriodValue("");
    setMediumValue("");
    setOrientationValue("");
    setColourValue("");
    setPeopleValue("");
  };

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

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <label id="collectionValue">Collection</label>
          <input
            type="text"
            id="collectionValue"
            value={collectionValue}
            onChange={event => setCollectionValue(event.target.value)}
          ></input>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <label id="artistValue">Artist/Creator</label>
          <input
            type="text"
            id="artistValue"
            value={artistValue}
            onChange={event => setArtistValue(event.target.value)}
          ></input>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <label id="periodValue">Period/Century</label>
          <input
            type="text"
            id="periodValue"
            value={periodValue}
            onChange={event => setPeriodValue(event.target.value)}
          ></input>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
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
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
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
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
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
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <label id="mediumValue">Medium</label>
          <input
            type="text"
            id="mediumValue"
            value={mediumValue}
            onChange={event => setMediumValue(event.target.value)}
          ></input>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Btn.SecondaryBtn onClick={clearFilters}>
          Clear filters
        </Btn.SecondaryBtn>
      </List>
    </div>
  );

  return (
    <SC.Sticky>
      <Button onClick={toggleDrawer("top", true)} style={{ color: "#1c1d1f" }}>
        <p>Refine Search</p>
        <ExpandMoreIcon />
      </Button>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        {sideList("top")}
      </Drawer>
    </SC.Sticky>
  );
}
//   return (
//     <form>
//       <label id="collectionValue">Collection</label>
//       <input
//         type="text"
//         id="collectionValue"
//         value={collectionValue}
//         onChange={event => setCollectionValue(event.target.value)}
//       ></input>
// <label id="artistValue">Artist/Creator</label>
// <input
//   type="text"
//   id="artistValue"
//   value={artistValue}
//   onChange={event => setArtistValue(event.target.value)}
// ></input>
// <label id="periodValue">Period/Century</label>
// <input
//   type="text"
//   id="periodValue"
//   value={periodValue}
//   onChange={event => setPeriodValue(event.target.value)}
// ></input>
// <label htmlFor="colourValue" id="colourValue">
//   Colour/B&W
// </label>
// <select
//   type="select"
//   id="colourValue"
//   value={colourValue}
//   onChange={event => setColourValue(event.target.value)}
// >
//   <option value="" disabled selected>
//     Select an option
//   </option>
//   <option value="">None</option>
//   <option value="Colour">Colour</option>
//   <option value="B&W">Black & White</option>
// </select>

// <label htmlFor="orientationValue" id="orientationValue">
//   Orientation
// </label>
// <select
//   type="select"
//   id="orientationValue"
//   value={orientationValue}
//   onChange={event => setOrientationValue(event.target.value)}
// >
//   <option value="" disabled selected>
//     Select an option
//   </option>
//   <option value="">None</option>
//   <option value="Landscape">Landscape</option>
//   <option value="Portrait">Portrait</option>
//   <option value="Square">Square</option>
// </select>

// <label htmlFor="peopleValue" id="peopleValue">
//   People
// </label>
// <select
//   type="select"
//   id="peopleValue"
//   value={peopleValue}
//   onChange={event => setPeopleValue(event.target.value)}
// >
//   <option value="" disabled selected>
//     Select an option
//   </option>
//   <option value="">None</option>
//   <option value="Yes">Yes</option>
//   <option value="No">No</option>
// </select>

//   <label id="mediumValue">Medium</label>
//   <input
//     type="text"
//     id="mediumValue"
//     value={mediumValue}
//     onChange={event => setMediumValue(event.target.value)}
//   ></input>
//   <button onClick={clearFilters}>Clear filters</button>
// </form>
//   );
// };

Filter.propTypes = {
  searchResult: PropTypes.object,
  filteredResult: PropTypes.object,
  setFilteredResult: PropTypes.func
};
