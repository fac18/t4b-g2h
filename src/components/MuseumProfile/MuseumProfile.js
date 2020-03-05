import React from "react";
import * as SC from "../styles/Form.style";
import { NavLink } from "react-router-dom";
import * as S from "../styles/Text.style";
import * as Btn from "../styles/Buttons.style";

const MuseumProfile = () => {
  return (
    <S.CenteredText>
      <h2>Your profile:</h2>
      <SC.FormBox action="/" method="POST">
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
        <Btn.WarningBtnL>Change Password</Btn.WarningBtnL>
      </SC.FormBox>
      <h2>Your content history:</h2>
      <NavLink to="/addnewcontent">
        <Btn.PrimaryBtn>Add new content</Btn.PrimaryBtn>
      </NavLink>
      {/* Display content history/uploads from db */}
    </S.CenteredText>
  );
};

export default MuseumProfile;
