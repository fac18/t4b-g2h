import React from "react";
import Img from "../styles/Img.style";
import * as Style from "./LandingPage.style.js";

const LandingPage = () => {
  return (
    <Style.Landing>
      {/* navbar */}
      <h2>
        “Gateway 2 Heritage dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.”
      </h2>
      <section>
        <article>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://cdn.londonandpartners.com/asset/victoria-and-albert-museum_the-john-madejski-garden-photo-james-medcraft-image-courtesy-of-the-victoria-and-albert-museum_339851f982d07c0a80cee498b4366062.jpg" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://cdn.londonandpartners.com/asset/victoria-and-albert-museum_the-john-madejski-garden-photo-james-medcraft-image-courtesy-of-the-victoria-and-albert-museum_339851f982d07c0a80cee498b4366062.jpg" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
        </article>
        <article>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://cdn.londonandpartners.com/asset/victoria-and-albert-museum_the-john-madejski-garden-photo-james-medcraft-image-courtesy-of-the-victoria-and-albert-museum_339851f982d07c0a80cee498b4366062.jpg" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://cdn.londonandpartners.com/asset/victoria-and-albert-museum_the-john-madejski-garden-photo-james-medcraft-image-courtesy-of-the-victoria-and-albert-museum_339851f982d07c0a80cee498b4366062.jpg" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
        </article>
        <article>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://cdn.londonandpartners.com/asset/victoria-and-albert-museum_the-john-madejski-garden-photo-james-medcraft-image-courtesy-of-the-victoria-and-albert-museum_339851f982d07c0a80cee498b4366062.jpg" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://cdn.getyourguide.com/img/tour_img-2462135-146.jpg" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
        </article>
      </section>
      {/* footer */}
    </Style.Landing>
  );
};

export default LandingPage;
