import React from "react";
import ImgContainer from "../styles/ImgContainer.style";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      {/* navbar */}
      <h2>
        “Gateway 2 Heritage dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.”
      </h2>
      <section>
        <div>
          <ImgContainer></ImgContainer>
          <p>Collection name</p>
          <ImgContainer></ImgContainer>
          <p>Collection name</p>
        </div>
        <div>
          <ImgContainer></ImgContainer>
          <p>Collection name</p>
          <ImgContainer></ImgContainer>
          <p>Collection name</p>
        </div>
        <div>
          <ImgContainer></ImgContainer>
          <p>Collection name</p>
          <ImgContainer></ImgContainer>
          <p>Collection name</p>
        </div>
      </section>
      {/* footer */}
    </>
  );
};

export default LandingPage;
