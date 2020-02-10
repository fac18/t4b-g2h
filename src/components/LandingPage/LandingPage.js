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
              <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
        </article>
        <article>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
        </article>
        <article>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            </Style.ImgContainer>
            <p>Collection name</p>
          </Style.MuseumContainer>
          <Style.MuseumContainer>
            <Style.ImgContainer>
              <Img src="https://images.unsplash.com/photo-1547472529-f9765c78845c?ixlib=rb-1.2.1&auto=format&fit=crop&w=361&q=80" />
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
