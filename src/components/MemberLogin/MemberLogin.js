import React from "react";
import * as SC from "../styles/Form.style";
import * as S from "../styles/Text.style";
import * as Btn from "../styles/Buttons.style";
import { Link } from "react-router-dom";

const MemberLogin = () => {
  return (
    <SC.GrowBox>
      <S.CenteredText>
        <h2>User Login</h2>
        <SC.FormBox action="/profile">
          <label htmlFor="username">Username:</label>
          <input
            aria-label="Enter username"
            id="username"
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            title="Please enter a valid email address"
          />
          <label htmlFor="username">Password:</label>
          <input
            id="password"
            type="password"
            aria-label="Enter password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least eight characters, including one letter and one number"
            required
          />
            <Btn.PrimaryBtnS action="/profile">Login</Btn.PrimaryBtnS>
          <Link to="/membersignup">
            <Btn.SecondaryBtnS>Sign-up</Btn.SecondaryBtnS>
          </Link>
        </SC.FormBox>
      </S.CenteredText>
    </SC.GrowBox>
  );
};

export default MemberLogin;
