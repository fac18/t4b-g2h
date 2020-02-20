import styled from "styled-components";

const SocialBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    img {
        margin-right: 0.618rem;
    }

    @media (max-width: 768px) {
    margin-top: 1.618rem;
  }
`;

export { SocialBox };