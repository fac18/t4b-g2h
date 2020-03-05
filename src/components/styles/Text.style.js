import styled from "styled-components";

const Margin = styled.div`
  margin: 4.236rem;
`;

const MarginTop = styled.div`
  margin-top: 12.18rem;
`;

const SearchBtnMargin = styled.div`
  margin-top: 7.7rem;
  margin-left: 4.236rem;
`;

const CenteredText = styled.div`
  text-align: center;
  margin-top: 12.18rem;
  margin-bottom: 4.236rem;
`;

const JustifiedText = styled.div`
  text-align: right;
`;

const BoldText = styled.span`
  font-family: "Gotham Medium";
`;

const TextDeco = styled.a`
  text-decoration: none;
  color: #eb5a61;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchCardText = styled.p`
  font-size: 0.618rem;
`;

const AboutPara = styled.p`
  width: 60vw;
  margin: auto;
  padding: 1.618rem;

  @media (max-width: 768px) {
    width: 80vw;
    margin: auto;
    padding: 1.618rem;
  }
`;

const GatewayBlurb = styled.h2`
  width: 60vw;
  margin: auto;

  @media (max-width: 768px) {
    width: 80vw;
    margin: auto;
  }
`;

export {
  Margin,
  CenteredText,
  JustifiedText,
  BoldText,
  TextDeco,
  MarginTop,
  SearchBtnMargin,
  SearchCardText,
  AboutPara,
  GatewayBlurb
};
