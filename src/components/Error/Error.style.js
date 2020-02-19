import styled from "styled-components";

const ErrorBox = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    font-weight: 400;
    margin: 0;
    color: #4e535f;
  }

  p {
    margin: 0;
    color: #4e535f;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

export { ErrorBox };
