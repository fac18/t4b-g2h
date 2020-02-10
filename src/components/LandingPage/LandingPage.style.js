import styled from "styled-components";

const Landing = styled.div`
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
  }
`;

const MuseumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const ImgContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export { Landing, MuseumContainer, ImgContainer };
