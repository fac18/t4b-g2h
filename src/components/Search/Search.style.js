import styled from "styled-components";

const SearchStyle = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
const Search = styled.div`
  p {
    text-align: center;
  }
  article {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  /* @media only screen and (max-width: 768px) {
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px;
    }
  } */
`;

const ContentContainer = styled.div`
  width: 250px;
  height: 300px;
  text-align: center;
  padding: 1rem 0 1rem 0;
`;

const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    width: 250px;
    height: 200px;
  }
  @media only screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }
`;

const ImgInContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export { Search, ContentContainer, ImgContainer, ImgInContainer, SearchStyle };
