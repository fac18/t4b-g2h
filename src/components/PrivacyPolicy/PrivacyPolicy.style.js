import styled from "styled-components";

const PrivacyBox = styled.section`
  text-align: left;
  margin: 4.236rem;
  margin-top: 12rem;

  h2,
  h3 {
    width: 60vw;
    margin: auto;
    margin-top: 1.618rem;

    @media (max-width: 768px) {
      width: 80vw;
    }
  }

  p {
    width: 60vw;
    margin: auto;
    margin-top: 1rem;

    @media (max-width: 768px) {
      width: 80vw;
    }
  }
`;

export { PrivacyBox };
