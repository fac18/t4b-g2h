import React from "react";
import PropTypes from "prop-types";
import * as SC from "./PreviewPage.style";
import { BoldText } from "../styles/Text.style";
import { Link } from "react-router-dom";
import dataCall from "../App/App";

const PreviewPage = ({ match, searchResult }) => {
  const id = match.params.id;
  if (!searchResult) return <h1>Loading Preview...</h1>;
  console.log(searchResult);
  const imageData = searchResult.location.searchImageProps;
  if (!imageData) return <h1>Loading Preview...</h1>;
  const keywords = imageData.keywords.split(", ");

  return (
    <SC.PreviewContainer>
      <SC.LeftPreviewColumn>
        <SC.PreviewImage src={imageData.imageUrl} alt={imageData.caption} />
        <SC.KeywordsContainer>
          {keywords.map(keyword => (
            <Link to="/search" key={keyword}>
              <SC.Keywords onclick={dataCall}>{keyword}/ </SC.Keywords>
            </Link>
          ))}
        </SC.KeywordsContainer>
      </SC.LeftPreviewColumn>
      <SC.RightPreviewColumn>
        <p>
          <BoldText>Image ID:</BoldText> {imageData.imageId}
        </p>
        <p>
          <BoldText>Caption:</BoldText> {imageData.caption}
        </p>
        <p>
          <BoldText>Description:</BoldText> {imageData.description}
        </p>
        <SC.ButtonContainer>
          <button>Licence this Image</button>
          <button>Buy a Print</button>
        </SC.ButtonContainer>
        <p>
          <BoldText>Collection:</BoldText> {imageData.collection}
        </p>
        <p>
          <BoldText>Medium:</BoldText> {imageData.medium}
        </p>
        <p>
          <BoldText>Artist/Creator:</BoldText> {imageData.creator}
        </p>
        <p>
          <BoldText>Date of Creation:</BoldText> {imageData.dateOfCreation}
        </p>
        <p>
          <BoldText>Date of Subject:</BoldText> {imageData.period}
        </p>
        <p>
          <BoldText>Copyright Status:</BoldText> {imageData.copyrightStatus}
        </p>
        <p>
          <BoldText>Copyright Owner:</BoldText> {imageData.copyrightHolder}
        </p>
        <p>
          <BoldText>Credit:</BoldText> {imageData.credit}
        </p>
      </SC.RightPreviewColumn>
    </SC.PreviewContainer>
  );
};

PreviewPage.propTypes = {
  searchResult: PropTypes.array
};

export default PreviewPage;
