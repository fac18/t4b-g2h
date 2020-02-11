import styled from "styled-components";

const Landing = styled.div`
  section {
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: center;
  }
  article {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    // align-items: center;
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
  // width: 35%;
`;

const ImgContainer = styled.div`
  // border: 2px;
  // border-style: solid;
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

export { Landing, MuseumContainer, ImgContainer };
