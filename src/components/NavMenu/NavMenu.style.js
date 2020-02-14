import styled from "styled-components";

const NavList = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 0;
  

  li {
    box-sizing: border-box;
    padding: 1rem;
    width: 15vw;
    background-color: #eb5a61;
    color: #2b2b31;
  }

  a {
    text-decoration: none;
  }

  li.selected {
    background-color: #4e525f;
    color: #ffffff;
  }

  li:hover {
    background-color: #4e525f;
    color: #ffffff;
  }
`;

const HackBox = styled.div`
    overflow: visible;
    height: 0;
    position: sticky;
    top: 19.9vh;
    margin-left: 82vw;
    margin-right:auto;
`;

export { NavList, HackBox };
