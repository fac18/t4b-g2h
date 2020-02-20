import styled from "styled-components";

const Margin = styled.div`
  margin: 4.236rem;
`;

const CenteredText = styled.div`
  text-align: center;
  margin: 4.236rem;
  margin-top: 20rem;
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

export { Margin, CenteredText, JustifiedText, BoldText, TextDeco };
