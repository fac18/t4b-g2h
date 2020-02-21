import styled from "styled-components";

const SearchStyle = styled.section`
  margin-bottom: 4.236rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-left: 5rem;
  }
  a {
    text-decoration: none;
    color: #2b2b31;
  }
`;
const Search = styled.div`
  article {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;

const ContentContainer = styled.div`
  width: 250px;
  height: 200px;
  text-align: center;
  padding: 1rem 0 5rem 0;
`;

const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 1rem;

  @media only screen and (max-width: 800px) {
    width: 250px;
    height: 200px;
  }
  @media only screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }
`;

const ImgInContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const FilterOptions = styled.div`
  width: 12vw;
  height: auto;
  margin-left: 4.236rem;
  /* padding: 1rem; */
  text-align: left;
  background-color: #4e535f;
  color: #ffffff;
  font-size: 1rem;
`;

export {
  Search,
  ContentContainer,
  ImgContainer,
  ImgInContainer,
  SearchStyle,
  FilterOptions
};
