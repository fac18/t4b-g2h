import React from "react";
import * as SC from "../styles/Form.style";
import * as S from "../styles/Text.style";
import * as Btn from "../styles/Buttons.style";

const MemberLogin = () => {
  return (
    <S.CenteredText>
      <h2>Member Login</h2>
      <SC.FormBox action="/" method="POST">
        <label htmlFor="username">Username:</label>
        <input aria-label="Enter username" id="username" required />
        <label htmlFor="username">Password:</label>
        <input
          id="password"
          type="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
        <Btn.PrimaryBtnS>Login</Btn.PrimaryBtnS>
        <Btn.SecondaryBtnS>Sign-up</Btn.SecondaryBtnS>
      </SC.FormBox>
    </S.CenteredText>
  );
};

export default MemberLogin;
