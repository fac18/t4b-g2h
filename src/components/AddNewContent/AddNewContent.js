import React, { useState } from "react";
import * as Form from "../styles/Form.style";
import * as Text from "../styles/Text.style";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as Btn from "../styles/Buttons.style";

const AddNewContent = () => {
  const [museumRecordId, setMuseumRecordId] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [copyrightStatus, setCopyrightStatus] = useState("");
  const [copyrightHolder, setCopyrightHolder] = useState("");
  const [creator, setCreator] = useState("");
  const [credit, setCredit] = useState("");
  const [orientation, setOrientation] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [collection, setCollection] = useState("");
  const [keywords, setKeywords] = useState("");
  const [medium, setMedium] = useState("");
  const [period, setPeriod] = useState("");
  const [people, setPeople] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);

  const useStyles = makeStyles(() => ({
    formLabel: {
      fontSize: "1.5rem",
      fontFamily: "Gotham Light",
      color: "#1c1d1f",
      textAlign: "center",
      marginTop: "1rem"
    },
    select: {
      marginBottom: "1rem"
    }
  }));
  const classes = useStyles();

  const fullData = {
    museumRecordId: museumRecordId,
    url: url,
    name: name,
    caption: caption,
    description: description,
    colour: colour,
    copyrightStatus: [copyrightStatus],
    copyrightHolder: copyrightHolder,
    creator: creator,
    credit: credit,
    orientation: orientation,
    createDate: createDate,
    collection: collection,
    keywords: keywords,
    medium: medium,
    period: period,
    people: people
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitMessage(!submitMessage);
    fetch("/.netlify/functions/postImage/postImage.js", {
      method: "POST",
      body: JSON.stringify(fullData)
    });
  };

  const closeSubmitMessage = event => {
    event.preventDefault();
    setSubmitMessage(!submitMessage);
    setMuseumRecordId("");
    setName("");
    setUrl("");
    setCaption("");
    setDescription("");
    setColour("");
    setCopyrightStatus("");
    setCopyrightHolder("");
    setCreator("");
    setCredit("");
    setOrientation("");
    setCreateDate("");
    setCollection("");
    setKeywords("");
    setMedium("");
    setPeriod("");
    setPeople("");
  };

  return (
    <Text.CenteredText>
      <h2>Submit a new image:</h2>
      <Form.FormBox onSubmit={handleSubmit}>
        <label htmlFor="museumRecordId">Museum Record ID:</label>
        <input
          name="museumRecordId"
          placeholder="Add your image's unique record ID"
          type="text"
          id="museumRecordId"
          aria-label="Add a Museum Record ID"
          value={museumRecordId}
          onChange={event => setMuseumRecordId(event.target.value)}
          required
        />

        <label htmlFor="url">Image URL:</label>
        <input
          name="url"
          type="url"
          placeholder="Specify a link to hosted image"
          id="url"
          aria-label="Add an image URL"
          value={url}
          onChange={event => setUrl(event.target.value)}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Name of the image"
          id="name"
          aria-label="Add a name"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />

        <label htmlFor="caption">Caption:</label>
        <input
          name="caption"
          type="text"
          placeholder="Caption for the image"
          id="caption"
          aria-label="Add a caption"
          value={caption}
          onChange={event => setCaption(event.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          placeholder="Description of the image"
          id="description"
          aria-label="Add a description"
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />

        {/* To change colour to radio button */}

        <InputLabel
          shrink
          id="demo-simple-select-placeholder-label-label"
          className={classes.formLabel}
          htmlFor="colour"
        >
          Colour:
        </InputLabel>
        <Select
          htmlFor="colour"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          aria-label="Select a colour type"
          type="select"
          value={colour}
          displayEmpty
          className={classes.select}
          onChange={event => setColour(event.target.value)}
          required
        >
          <MenuItem value="" disabled selected>
            Select an option
          </MenuItem>
          <MenuItem value="Colour">Colour</MenuItem>
          <MenuItem value="B&W">Black & White</MenuItem>
        </Select>

        {/* To change copyright to checkbox multi-select (format to be array) */}

        <InputLabel
          shrink
          id="demo-simple-select-placeholder-label-label"
          className={classes.formLabel}
          htmlFor="copyrightStatus"
        >
          Copyright Status:
        </InputLabel>
        <Select
          htmlFor="copyrightStatus"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          aria-label="Select a copyright status"
          type="select"
          value={copyrightStatus}
          displayEmpty
          className={classes.select}
          onChange={event => setCopyrightStatus(event.target.value)}
          required
        >
          <MenuItem value="" disabled selected>
            Select an option
          </MenuItem>
          <MenuItem value="Full licensing">Full licensing</MenuItem>
          <MenuItem value="Editorial">Editorial</MenuItem>
          <MenuItem value="Special permission">Special permission</MenuItem>
          <MenuItem value="Public domain">Public domain</MenuItem>
          <MenuItem value="Universal">Universal</MenuItem>
          <MenuItem value="Editorial">Editorial</MenuItem>
          <MenuItem value="Restricted">Restricted</MenuItem>
          <MenuItem value="Social media">Social media</MenuItem>
        </Select>

        <label htmlFor="copyrightHolder">Copyright Holder:</label>
        <input
          name="copyrightHolder"
          type="text"
          placeholder="Name of the image's copyright holder"
          id="copyrightHolder"
          aria-label="Add a copyright holder"
          value={copyrightHolder}
          onChange={event => setCopyrightHolder(event.target.value)}
          required
        />

        <label htmlFor="creator">Creator:</label>
        <input
          name="creator"
          type="text"
          placeholder="Name of the image's creator"
          id="creator"
          aria-label="Add a creator"
          value={creator}
          onChange={event => setCreator(event.target.value)}
          required
        />

        <label htmlFor="credit">Image credit:</label>
        <input
          name="credit"
          type="text"
          placeholder="Credit for the image"
          id="credit"
          aria-label="Add an image credit"
          value={credit}
          onChange={event => setCredit(event.target.value)}
          required
        />

        <InputLabel
          shrink
          id="demo-simple-select-placeholder-label-label"
          className={classes.formLabel}
          htmlFor="orientation"
        >
          Orientation:
        </InputLabel>
        <Select
          htmlFor="orientation"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          aria-label="Select an image orientation"
          type="select"
          value={orientation}
          displayEmpty
          className={classes.select}
          onChange={event => setOrientation(event.target.value)}
          required
        >
          <MenuItem value="" disabled selected>
            Select an option
          </MenuItem>
          <MenuItem value="Portrait">Portrait</MenuItem>
          <MenuItem value="Landscape">Landscape</MenuItem>
          <MenuItem value="Square">Square</MenuItem>
        </Select>

        <label htmlFor="createDate">Create Date:</label>
        <input
          name="createDate"
          type="text"
          placeholder="Create date of the image"
          id="createDate"
          aria-label="Add a create date"
          value={createDate}
          onChange={event => setCreateDate(event.target.value)}
          required
        />

        <label htmlFor="collection">Collection name:</label>
        <input
          name="collection"
          type="text"
          placeholder="The collection name of the image"
          id="collection"
          aria-label="Add a collection name"
          value={collection}
          onChange={event => setCollection(event.target.value)}
          required
        />

        <label htmlFor="keywords">Keywords:</label>
        <input
          name="keywords"
          type="text"
          placeholder="All keywords, separated by commas"
          id="keywords"
          aria-label="Add keywords"
          value={keywords}
          onChange={event => setKeywords(event.target.value)}
          required
        />

        <InputLabel
          shrink
          id="demo-simple-select-placeholder-label-label"
          className={classes.formLabel}
          htmlFor="medium"
        >
          Medium:
        </InputLabel>
        <Select
          htmlFor="medium"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          aria-label="Select a medium type"
          type="select"
          value={medium}
          displayEmpty
          className={classes.select}
          onChange={event => setMedium(event.target.value)}
          required
        >
          <MenuItem value="" disabled selected>
            Select an option
          </MenuItem>
          <MenuItem value="Illustration">Illustration</MenuItem>
          <MenuItem value="Painting">Painting</MenuItem>
          <MenuItem value="Photograph">Photograph</MenuItem>
        </Select>

        <label htmlFor="period">Period:</label>
        <input
          name="period"
          type="text"
          placeholder="The period of the image or subject"
          id="period"
          aria-label="Add a period"
          value={period}
          onChange={event => setPeriod(event.target.value)}
          required
        />

        <InputLabel
          shrink
          id="demo-simple-select-placeholder-label-label"
          className={classes.formLabel}
          htmlFor="people"
        >
          People:
        </InputLabel>
        <Select
          htmlFor="people"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          aria-label="Select a people type"
          type="select"
          value={people}
          displayEmpty
          className={classes.select}
          onChange={event => setPeople(event.target.value)}
          required
        >
          <MenuItem value="" disabled selected>
            Select an option
          </MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>

        <input type="submit" />
      </Form.FormBox>
      {/* inline styling below, to be refactored! */}

      {submitMessage ? (
        <div
          style={{
            textAlign: "center",
            verticalAlign: "center",
            fontWeight: "700",
            backgroundColor: "#ffffff",
            position: "fixed",
            height: "15rem",
            width: "30rem",
            borderRadius: "10px",
            top: "25%",
            left: "35%"
          }}
        >
          Thank you for submitting a new image!
          <Btn.SecondaryBtn
            style={{ bottom: "25%" }}
            onClick={event => closeSubmitMessage(event)}
          >
            Close
          </Btn.SecondaryBtn>
        </div>
      ) : null}
    </Text.CenteredText>
  );
};

export default AddNewContent;
