import styled from "styled-components";

const PreviewContainer = styled.section`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4.236rem;
  margin-bottom: 4.236rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  button {
      margin-right: 1rem;
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftPreviewColumn = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1.618rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 80vw;
    height: auto;
    padding: 0;
  }
`;

const RightPreviewColumn = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1.618rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 80vw;
    height: auto;
    padding: 0;
  }
`;

const PreviewImage = styled.img`
  width: 30vw;
  @media (max-width: 1024px) {
    width: 80vw;
    height: auto;
  }
`;

const Keywords = styled.p`
  width: 30vw;
  text-align: right;
  line-height: 1.5;
  @media (max-width: 1024px) {
    width: auto;
  }
`;

export {
  PreviewContainer,
  ButtonContainer,
  LeftPreviewColumn,
  RightPreviewColumn,
  PreviewImage,
  Keywords
};
