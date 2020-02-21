import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./PreviewPage.style";
import * as Btn from "../styles/Buttons.style";
import { BoldText } from "../styles/Text.style";
//import { Link } from "react-router-dom";
//import dataCall from "../App/App";

const PreviewPage = ({ location }) => {
  const id = location.search.split("=")[1];
  const [previewData, setPreviewData] = useState(null);
  const imageCall = async id => {
    await (
      await fetch(`/.netlify/functions/getImage/getImage.js?keywords=${id}`)
    )

      .json()
      .then(data => setPreviewData(data))
      .catch(console.error);
  };

  useEffect(() => imageCall(id), [id]);

  if (!previewData) return <h1>Loading...</h1>;

  // if (!searchResult) return <h1>Loading...</h1>;
  // const keyword = location.search.split("?")[1].split("=")[0];
  // console.log("the keyword is", keyword);

  // const id = location.search.split("=")[1];
  // console.log(id);
  // console.log(searchResult);
  // const filteredSearchResult = searchResult.records.filter(image => {
  //   return image.fields.image_id === Number(id);
  // });

  // setKeyword(keyword);
  // console.log(filteredSearchResult[0]);
  // if (!filteredSearchResult) return <h1>Loading...</h1>;
  return (
    <SC.PreviewContainer>
      <SC.LeftPreviewColumn>
        <SC.PreviewImage
          src={previewData.records[0].fields.url}
          alt={previewData.records[0].fields.caption}
        />
        {/* <SC.KeywordsContainer>
          {keywords.map(keyword => (
            <Link to="/search" key={keyword}>
              <SC.Keywords onclick={dataCall}>{keyword}/ </SC.Keywords>
            </Link>
          ))}
        </SC.KeywordsContainer> */}
      </SC.LeftPreviewColumn>
      <SC.RightPreviewColumn>
        <p>
          <BoldText>Image ID:</BoldText>{" "}
          {previewData.records[0].fields.image_id}
        </p>
        <p>
          <BoldText>Caption:</BoldText> {previewData.records[0].fields.caption}
        </p>
        <p>
          <BoldText>Description:</BoldText>{" "}
          {previewData.records[0].fields.description}
        </p>
        <SC.ButtonContainer>
          <Btn.PrimaryBtn>Licence this image</Btn.PrimaryBtn>
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
    </SC.PreviewContainer>
  );
};

PreviewPage.propTypes = {
  searchResult: PropTypes.array
};

export default PreviewPage;
