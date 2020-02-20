import styled from "styled-components";

const Landing = styled.div`
  margin-top: 12.18rem;
  h2 {
    margin: 4.236rem;
  }
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
      justify-content: center;
      padding: 0px;
    }

    h2 {
      font-size: 1rem;
      width: 80vw;
      margin-top: 1.618rem;
      margin-bottom: 1.618rem;
      margin-left: auto;
      margin-right: auto;
      text-align: justify;
    }
  }
`;

const MuseumContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    width: 80vw;
    align-items: center;
  }
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

export { Landing, MuseumContainer, ImgContainer };
