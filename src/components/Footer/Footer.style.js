import styled from "styled-components";

const FooterBox = styled.header`
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  background-color: #4e535f;
  padding: 1rem;

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
`;

export { FooterBox, FooterTextBox };
