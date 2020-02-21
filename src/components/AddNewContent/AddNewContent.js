import React, { useState } from "react";
import * as SC from "../styles/Form.style";

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

  // console.log(colour);

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
    fetch("/.netlify/functions/postImage/postImage.js", {
      method: "POST",
      body: JSON.stringify(fullData)
    });
  };

  return (
    <>
      <h2>Submit a new image:</h2>

      <SC.FormBox onSubmit={handleSubmit}>
        <label htmlFor="museumRecordId">Museum Record ID:</label>
        <input
          name="museumRecordId"
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
          id="description"
          aria-label="Add a description"
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />

        {/* attempted radio button for colour select */}
        {/* {console.log(colour)}
        <p>Select a colour type:</p>
        <input
          type="radio"
          name="colour"
          id="b&w"
          value={colour}
          onChange={event => setColour(event.target.value)}
        />
        <label htmlFor="b&w" value="b&w">
          Black and White
        </label>
        <input type="radio" name="colour" id="colour" value="Colour" />
        <label htmlFor="colour">Colour</label> */}

        <label htmlFor="colour">Colour:</label>
        <select
          htmlFor="colour"
          aria-label="Add a colour type"
          value={colour}
          onChange={event => setColour(event.target.value)}
          required
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="B&W">Black and White</option>
          <option value="Colour">Colour</option>
        </select>

        {/* To change copyright status to checkbox multi-select (format to be array) */}

        <label htmlFor="copyrightStatus">Copyright Status:</label>
        <select
          htmlFor="copyrightStatus"
          aria-label="Add a copyright status"
          value={copyrightStatus}
          onChange={event => setCopyrightStatus(event.target.value)}
          required
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="Full licensing">Full licensing</option>
          <option value="Editorial">Editorial</option>
          <option value="Special permission">Special permission</option>
          <option value="Public domain">Public domain</option>
          <option value="Universal">Universal</option>
          <option value="Editorial">Editorial</option>
          <option value="Restricted">Restricted</option>
          <option value="Social media">Social media</option>
        </select>

        <label htmlFor="copyrightHolder">Copyright Holder:</label>
        <input
          name="copyrightHolder"
          type="text"
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
          id="credit"
          aria-label="Add an image credit"
          value={credit}
          onChange={event => setCredit(event.target.value)}
          required
        />

        <label htmlFor="orientation">Orientation:</label>
        <select
          htmlFor="orientation"
          aria-label="Add an orientation"
          value={orientation}
          onChange={event => setOrientation(event.target.value)}
          required
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="Portrait">Portrait</option>
          <option value="Landscape">Landscape</option>
          <option value="Square">Square</option>
        </select>

        <label htmlFor="createDate">Create Date:</label>
        <input
          name="createDate"
          type="text"
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
          id="keywords"
          aria-label="Add keywords"
          value={keywords}
          onChange={event => setKeywords(event.target.value)}
          required
        />

        <label htmlFor="medium">Medium:</label>
        <select
          htmlFor="medium"
          aria-label="Add a medium type"
          value={medium}
          onChange={event => setMedium(event.target.value)}
          required
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="Illustration">Illustration</option>
          <option value="Painting">Painting</option>
          <option value="Photograph">Photograph</option>
        </select>

        <label htmlFor="period">Period:</label>
        <input
          name="period"
          type="text"
          id="period"
          aria-label="Add a period"
          value={period}
          onChange={event => setPeriod(event.target.value)}
          required
        />

        <label htmlFor="people">People:</label>
        <select
          htmlFor="people"
          aria-label="Specify whether people are present"
          value={people}
          onChange={event => setPeople(event.target.value)}
          required
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <input type="submit" />
      </SC.FormBox>
    </>
  );
};

export default AddNewContent;
