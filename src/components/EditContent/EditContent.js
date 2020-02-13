import React from "react";
import * as SC from "../styles/Form.style";

const EditContent = () => {
  return (
    <>
      <h2>Edit Content</h2>
      {/* <p>{museum.id here from db}</p> */}
      <SC.FormBox action="/" method="POST">
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          type="text"
          id="title"
          aria-label="Add a title"
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          id="description"
          aria-label="Add a description"
          required
        />
        <p className="image-link">
          Photo URLs: please provide a link to the content that is hosted
          online. <br />
          You can use a service like
          <a href="https://imgur.com/upload" aria-label="Link to imgur uploads">
            imgur
          </a>{" "}
          to upload a picture if needed.
        </p>
        <label htmlFor="imageLink">Image Link:</label>
        <input
          name="image"
          id="imageLink"
          type="text"
          aria-label="Add an image link"
          required
        />
        <label htmlFor="author">Author/Creator:</label>
        <input
          name="author"
          type="text"
          id="author"
          aria-label="Add the author's name"
          required
        />
        <label htmlFor="keywords">Keywords:</label>
        <input
          name="keywords"
          type="text"
          id="keywords"
          aria-label="Add all the relevant keywords to your content"
          required
        />
        <label htmlFor="creationData">Creation Date:</label>
        <input
          name="creation"
          type="text"
          id="creationData"
          aria-label="Add your content's creation date"
          required
        />

        <button>Submit</button>
      </SC.FormBox>
    </>
  );
};

export default EditContent;
