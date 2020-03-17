import styled from "styled-components";

const LicenseForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;

  select {
    height: 2.618rem;
    padding: 0.618rem;
    width: 30vw;
    margin-bottom: 1rem;
    border: 1px solid #eb5a61;
    font-family: "Gotham Light";
    font-size: 1rem;
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
        width: 80vw;
    }
  }
`;

export { LicenseForm };
