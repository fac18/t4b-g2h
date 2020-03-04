import styled from "styled-components";

const PreviewContainer = styled.section`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12.18rem;
  margin-bottom: 4.236rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;

  button {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: #2b2b31;
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const LeftPreviewColumn = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1.618rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    padding: 0;
  }
`;

const PreviewImage = styled.img`
  width: 30vw;
  margin-top: 16px;
  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }
`;

const KeywordsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  width: 30vw;
  margin-top: 0.618rem;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const Keywords = styled.a`
  line-height: 1.5;
  text-align: right; 

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 1rem; 
  }
`;

export {
  PreviewContainer,
  ButtonContainer,
  LeftPreviewColumn,
  RightPreviewColumn,
  PreviewImage,
  Keywords,
  KeywordsContainer
};
