import React from "react";
import PropTypes from "prop-types";
import * as SC from "./PreviewPage.style";
import { BoldText } from "../styles/Text.style";

const PreviewPage = searchResult => {
  if (!searchResult) return <h1>Loading Preview</h1>;
  const imageData = searchResult.location.searchImageProps;
  const slashedKeywords = imageData.keywords.replace(/, /gi, " / ");
  return (
    <SC.PreviewContainer>
      <SC.LeftPreviewColumn>
        <SC.PreviewImage src={imageData.imageUrl} alt={imageData.caption} />
        <SC.Keywords>{slashedKeywords}</SC.Keywords>
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
