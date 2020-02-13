import React from "react";
import * as SC from "../styles/Form.style";

const MemberLogin = () => {
  return (
    <>
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
        <button>Login</button>
        <button>Sign-up</button>
      </SC.FormBox>
    </>
  );
};

export default MemberLogin;
