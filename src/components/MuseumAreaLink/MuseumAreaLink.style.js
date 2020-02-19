import styled from "styled-components";

const MuseumLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 1.618rem;
  }

  p {
    color: #ffffff;
    text-decoration: none;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    margin-right: 0.618rem;
  }
`;

export { MuseumLinkContainer };
