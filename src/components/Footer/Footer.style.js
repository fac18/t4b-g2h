import styled from "styled-components";

const FooterBox = styled.header`
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  background-color: #4e535f;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;

  p {
    font-family: "Karla", sans-serif;
    color: #ffffff;
    text-decoration: none;
  }

  a {
    font-family: "Karla", sans-serif;
    color: #ffffff;
    text-decoration: none;
  }
`;

const FooterTextBox = styled.div`
  p {
    font-family: "Karla", sans-serif;
    color: #ffffff;
    text-decoration: none;
  }

  a {
    font-family: "Karla", sans-serif;
    color: #ffffff;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    font-family: "Karla", sans-serif;
    color: #ffffff;
    text-decoration: none;
  }
`;

export { FooterBox, FooterTextBox };
