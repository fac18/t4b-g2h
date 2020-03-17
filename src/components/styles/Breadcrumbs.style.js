import styled from "styled-components";

const Breadcrumbs = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: 10vw;
  margin-top: 12.18rem;
  
  p {
    margin-right: 1rem;
    cursor: pointer;
  }

  p:last-child {
    border-bottom:3px solid #EB5A61;
  }

`;

export { Breadcrumbs };
