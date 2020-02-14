import React, { useState } from "react";
import * as SC from "../Search/Search.style";
import * as Style from "../styles/Text.style";
// import { Link } from "react-router-dom";

const Partners = () => {
  const [museumData, setMuseumData] = useState(null);

  const museumDataCall = async () => {
    await (await fetch("/.netlify/functions/getMuseumData/getMuseumData.js"))
      .json()
      .then(data => setMuseumData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    museumDataCall();
  }, []);
  if (!museumData) return <h1>Loading...</h1>;
  const museumRecord = museumData.records;
  return (
    <>
      <Style.CenteredText>
        <h2>Our Partners</h2>
      </Style.CenteredText>
      <SC.SearchStyle>
        {museumRecord.map(record => (
          <SC.ContentContainer key={record.fields.museum_id}>
            <SC.ImgContainer>
              <SC.ImgInContainer src={record.fields.museum_image} />
            </SC.ImgContainer>
            <p>{record.fields.name}</p>
          </SC.ContentContainer>
        ))}
      </SC.SearchStyle>
    </>
  );
};

export default Partners;
