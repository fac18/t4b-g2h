import React from "react";
import * as SC from "./MemberLogin.style";

const MemberLogin = () => {
  return (
    <>
      <h2>Member Login</h2>
      <SC.MemberLoginForm action="/" method="POST">
        <label htmlFor="username">Username:</label>
        <input aria-label="Enter username" id="username" required />
        <label htmlFor="username">Password:</label>
        <input
          placeholder="password"
          id="password"
          type="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
        <button>Login</button>
        <button>Sign-up</button>
      </SC.MemberLoginForm>
    </>
  );
};

export default MemberLogin;
