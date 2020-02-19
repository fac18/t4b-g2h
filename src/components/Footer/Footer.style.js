import styled from "styled-components";

const FooterBox = styled.footer`
  box-sizing: border-box;
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: row wrap;
  justify-content: space-evenly;
  align-items: start;
  background-color: #4e535f;
  padding: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-flow: column;
    height: auto;
    align-items: center;
  }

  p {
    color: #ffffff;
    text-decoration: none;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const FooterTextBox = styled.div`
  p {
    color: #ffffff;
    text-decoration: none;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    color: #ffffff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export { FooterBox, FooterTextBox };
