import React from "react";
import * as SC from "../styles/Form.style";
import * as S from "../styles/Text.style";
import * as Btn from "../styles/Buttons.style";

const MemberSignUp = () => {
  return (
    <S.CenteredText>
      <h2>User Sign-up</h2>
      <SC.FormBox action="/" method="POST">
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          id="username"
          aria-label="Enter username"
          required
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          title="Please enter a valid email address"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least eight characters, including one letter and one number"
          required
        />
        <label htmlFor="confirmedPassword">Confirm Password:</label>
        <input
          id="confirmedPassword"
          type="password"
          name="confirmedPassword"
          aria-label="Enter password"
          required
        />
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          name="email"
          aria-label="Enter email address"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          title="Please enter a valid email address"
          required
        ></input>
        <Btn.PrimaryBtnS>Submit</Btn.PrimaryBtnS>
      </SC.FormBox>
    </S.CenteredText>
  );
};

export default MemberSignUp;
