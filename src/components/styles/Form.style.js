import styled from "styled-components";

const GrowBox = styled.section`
    min-height: 50vmin; 
    flex-grow: 1;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 4.236rem 0 4.236rem;
  align-items: center;
  justify-content: left;

  input {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border: 1.2px solid #eb5a61;
    /* border-radius: 5px; */
    background-color: #ffffff;
    padding: 0.618rem;
    width: 15rem;
    margin: 0.4rem;
    justify-content: left;
  }
`;

export { FormBox, GrowBox };
