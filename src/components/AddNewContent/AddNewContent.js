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
  console.log(fullData);
  return (
    <>
      <h2>Add New Content</h2>
      {/* <p>{museum.id here from db}</p> */}
      <SC.FormBox onSubmit={handleSubmit}>
        <label htmlFor="museumRecordId">Museum Id:</label>
        <input
          name="museumRecordId"
          type="text"
          id="museumRecordId"
          aria-label="Add a title"
          value={museumRecordId}
          onChange={event => setMuseumRecordId(event.target.value)}
        />

        <label htmlFor="museum_id">Url:</label>
        <input
          name="url"
          type="text"
          id="url"
          aria-label="Add a title"
          value={url}
          onChange={event => setUrl(event.target.value)}
        />

        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          id="name"
          aria-label="Add a title"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="caption">Caption:</label>
        <input
          name="caption"
          type="text"
          id="caption"
          aria-label="Add a title"
          value={caption}
          onChange={event => setCaption(event.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          id="description"
          aria-label="Add a title"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <label htmlFor="colour">Colour:</label>
        <input
          name="colour"
          type="text"
          id="colour"
          aria-label="Add a title"
          value={colour}
          onChange={event => setColour(event.target.value)}
        />

        <label htmlFor="copyrightStatus">Copyright Status:</label>
        <input
          name="copyrightStatus"
          type="text"
          id="copyrightStatus"
          aria-label="Add a title"
          value={copyrightStatus}
          onChange={event => setCopyrightStatus(event.target.value)}
        />

        <label htmlFor="copyrightHolder">Copyright Holder:</label>
        <input
          name="copyrightHolder"
          type="text"
          id="copyrightHolder"
          aria-label="Add a title"
          value={copyrightHolder}
          onChange={event => setCopyrightHolder(event.target.value)}
        />

        <label htmlFor="creator">Creator:</label>
        <input
          name="creator"
          type="text"
          id="creator"
          aria-label="Add a title"
          value={creator}
          onChange={event => setCreator(event.target.value)}
        />

        <label htmlFor="credit">Credit:</label>
        <input
          name="credit"
          type="text"
          id="credit"
          aria-label="Add a title"
          value={credit}
          onChange={event => setCredit(event.target.value)}
        />

        <label htmlFor="orientation">Orientation:</label>
        <input
          name="orientation"
          type="text"
          id="orientation"
          aria-label="Add a title"
          value={orientation}
          onChange={event => setOrientation(event.target.value)}
        />

        <label htmlFor="createDate">Create Date:</label>
        <input
          name="createDate"
          type="text"
          id="createDate"
          aria-label="Add a title"
          value={createDate}
          onChange={event => setCreateDate(event.target.value)}
        />

        <label htmlFor="collection">Collection:</label>
        <input
          name="collection"
          type="text"
          id="collection"
          aria-label="Add a title"
          value={collection}
          onChange={event => setCollection(event.target.value)}
        />

        <label htmlFor="museum_id">Museum Id:</label>
        <input
          name="museum_id"
          type="text"
          id="museum_id"
          aria-label="Add a title"
          value={museumRecordId}
          onChange={event => setMuseumRecordId(event.target.value)}
        />

        <label htmlFor="keywords">Keywords:</label>
        <input
          name="keywords"
          type="text"
          id="keywords"
          aria-label="Add a title"
          value={keywords}
          onChange={event => setKeywords(event.target.value)}
        />

        <label htmlFor="medium">Medium:</label>
        <input
          name="medium"
          type="text"
          id="medium"
          aria-label="Add a title"
          value={medium}
          onChange={event => setMedium(event.target.value)}
        />

        <label htmlFor="period">Period:</label>
        <input
          name="period"
          type="text"
          id="period"
          aria-label="Add a title"
          value={period}
          onChange={event => setPeriod(event.target.value)}
        />

        <label htmlFor="people">People:</label>
        <input
          name="people"
          type="text"
          id="people"
          aria-label="Add a title"
          value={people}
          onChange={event => setPeople(event.target.value)}
        />

        <input type="submit" />
      </SC.FormBox>
    </>
  );
};

export default AddNewContent;
