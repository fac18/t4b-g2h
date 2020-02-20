import styled from "styled-components";

const AboutBox = styled.section`
  text-align: center;
  margin: 4.236rem;

  @media (max-width: 768px) {
    h2 {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const AboutLogo = styled.img`
  width: 10rem;
  height: auto;
`;

export { AboutBox, AboutLogo };
