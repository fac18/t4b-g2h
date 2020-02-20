import React from "react";
import * as SC from "../styles/Form.style";
import * as S from "../styles/Text.style";

const MemberProfile = () => {
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
        <button>Change Password</button>
      </SC.FormBox>
      <h3>Your purchases:</h3>
      {/* Display purchases content from db */}
    </S.CenteredText>
  );
};

export default MemberProfile;
