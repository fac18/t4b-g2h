import React from "react";
import Img from "../styles/Img.style";
import * as Style from "./Search.style.js";

const SearchPage = () => {
  return (
    <Style.Search>
      {/* navbar */}
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
    </Style.Search>
  );
};

export default SearchPage;
