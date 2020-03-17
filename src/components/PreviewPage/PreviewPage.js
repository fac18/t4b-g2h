import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./PreviewPage.style";
import * as Btn from "../styles/Buttons.style";
import { BoldText } from "../styles/Text.style";
import { Breadcrumbs } from "../styles/Breadcrumbs.style";
import { Link } from "react-router-dom";

const PreviewPage = ({ location }) => {
  const id = location.search.split("=")[1];
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    const imageCall = async id => {
      await (
        await fetch(`/.netlify/functions/getImage/getImage.js?keywords=${id}`)
      )
        .json()
        .then(data => setPreviewData(data))
        .catch(console.error);
    };
    imageCall(id);
  }, [id]);

  if (!previewData) return <h1 style={{ marginTop: "10rem" }}>Loading...</h1>;

  const keywords = previewData.records[0].fields.keywords;

  return (
    <SC.PreviewContainer>
      <Breadcrumbs>
        <p>Home</p>
        <p>Search</p>
        <p>Preview</p>
      </Breadcrumbs>

      <SC.PreviewColumnContainer>
        <SC.LeftPreviewColumn>
          <SC.PreviewImage
            src={previewData.records[0].fields.url}
            alt={previewData.records[0].fields.caption}
          />
          <SC.KeywordsContainer>
            <SC.Keywords>{keywords}</SC.Keywords>
          </SC.KeywordsContainer>
        </SC.LeftPreviewColumn>
        <SC.RightPreviewColumn>
          <p>
            <BoldText>Image ID:</BoldText> {previewData.records[0].fields.gh_id}
          </p>
          <p>
            <BoldText>Caption:</BoldText>{" "}
            {previewData.records[0].fields.caption}
          </p>
          <p>
            <BoldText>Description:</BoldText>{" "}
            {previewData.records[0].fields.description}
          </p>
          <SC.ButtonContainer>
          <Link to={`/licensepage?id=${id}`}>
            <Btn.PrimaryBtn>Licence this image</Btn.PrimaryBtn>
            </Link>
            <Btn.SecondaryBtn>Buy a Print</Btn.SecondaryBtn>
          </SC.ButtonContainer>
          <p>
            <BoldText>Collection:</BoldText>{" "}
            {previewData.records[0].fields.collection}
          </p>
          <p>
            <BoldText>Medium:</BoldText> {previewData.records[0].fields.medium}
          </p>
          <p>
            <BoldText>Artist/Creator:</BoldText>{" "}
            {previewData.records[0].fields.creator}
          </p>
          <p>
            <BoldText>Date of Creation:</BoldText>{" "}
            {previewData.records[0].fields.create_date}
          </p>
          <p>
            <BoldText>Date of Subject:</BoldText>{" "}
            {previewData.records[0].fields.period}
          </p>
          <p>
            <BoldText>Copyright Status:</BoldText>{" "}
            {previewData.records[0].fields.copyright_status}
          </p>
          <p>
            <BoldText>Copyright Owner:</BoldText>{" "}
            {previewData.records[0].fields.copyright_holder}
          </p>
          <p>
            <BoldText>Credit:</BoldText> {previewData.records[0].fields.credit}
          </p>
        </SC.RightPreviewColumn>
      </SC.PreviewColumnContainer>
    </SC.PreviewContainer>
  );
};

PreviewPage.propTypes = {
  searchResult: PropTypes.object,
  location: PropTypes.object
};

export default PreviewPage;
