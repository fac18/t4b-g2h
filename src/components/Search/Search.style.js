import styled from "styled-components";

const SearchStyle = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
`;
const Search = styled.div`
  p {
    text-align: center;
  }
  article {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 800px) {
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px;
    }
  }
`;

const ContentContainer = styled.div`
  width: 250px;
  height: 300px;
  text-align: center;
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
