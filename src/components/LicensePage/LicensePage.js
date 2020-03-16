import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as SC from "../PreviewPage/PreviewPage.style";
import * as LS from "./LicensePage.style";
import * as Btn from "../styles/Buttons.style";
import { BoldText } from "../styles/Text.style";
import { Breadcrumbs } from "../styles/Breadcrumbs.style";
//import { Link } from "react-router-dom";

const LicensePage = ({ location }) => {
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
        <p>License</p>
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
          <p>
            <BoldText>Licensing Options:</BoldText>{" "}
          </p>
          <LS.LicenseForm>
            <label htmlFor="type">Type</label>
            <select id="type">
              <option value="">Select</option>
              <option value="commercial">Commercial</option>
              <option value="editorial">Editorial</option>
              <option value="social">Social Media/online</option>
              <option value="academic">Academic</option>
            </select>
            <label htmlFor="usage">Usage</label>
            <select id="usage">
              <option value="">Select</option>
              <option value="publishing">Publishing (books and e-books)</option>
              <option value="scholarly">Publishing (Scholarly Journals)</option>
              <option value="newspapers">
                Newspapers & Magazines (print/digital)
              </option>
              <option value="socialmediacom">Social Media - Commercial</option>
              <option value="websitecom">Website - Commercial</option>
              <option value="websitenoncom">Website - Non Profit</option>
            </select>
            <label htmlFor="duration">Duration</label>
            <select id="duration">
              <option value="">Select</option>
              <option value="1">One year</option>
              <option value="5">Five years</option>
            </select>
            <label htmlFor="audience">Audience</label>
            <select id="audience">
              <option value="">Select</option>

              <option value="worldwide">Worldwide</option>
            </select>
            <Btn.PrimaryBtn type="button">Add to basket</Btn.PrimaryBtn>
          </LS.LicenseForm>
        </SC.RightPreviewColumn>
      </SC.PreviewColumnContainer>
    </SC.PreviewContainer>
  );
};

LicensePage.propTypes = {
  searchResult: PropTypes.object,
  location: PropTypes.object
};

export default LicensePage;
