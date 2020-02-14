import styled from "styled-components";

const HeaderBox = styled.header`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eb5a61;
  align-items: end;
  position: sticky;
  top: -10vh;
  overflow: auto;

  h1 {
    color: #2b2b31;
  }

  a {
    color: #2b2b31;
    text-decoration: none;
  }
`;

const TitleBox = styled.div`
  width: 80wv;
  height: 10vh;
  background-color: #eb5a61;
`;

const SearchBox = styled.div`
  width: 80wv;
  height: 20vh;
  background-color: #eb5a61;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
`;

const LogoBox = styled.div`
  position: fixed;
  top: 0.618rem;
  left: 0.618rem;
`;

const MenuArea = styled.div`
  position: fixed;
  top: 0.618rem;
  right: 0.618rem;
  box-sizing: border-box;
  max-height: 10vh;
  margin: 0.618rem;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 60vw;
  height: 2rem;
  border-radius: 10px;
  border: none;
  background-color: white;
  padding-left: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ::placeholder {
    color: #4e535f;
  }
`;

const G2hLogo = styled.img`
  margin: 0.618rem;
`;

const MenuButton = styled.p`
  cursor: pointer;
`;

const Basket = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export {
  HeaderBox,
  SearchBox,
  LogoBox,
  Middle,
  MenuArea,
  TitleBox,
  SearchBar,
  G2hLogo,
  MenuButton,
  Basket
};
