import styled from "styled-components";

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

const MuseumContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 250px;
    height: 200px;
  }
  @media only screen and (max-width: 1000px) {
    width: 400px;
    height: 200px;
  }
`;

export { Search, MuseumContainer, ImgContainer };
