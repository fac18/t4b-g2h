import React from "react";
import * as SC from "./MemberLogin.style";

const MemberLogin = () => {
  return (
    <>
      <h2>Member Login</h2>
      <SC.MemberLoginForm action="/" method="POST">
        <input placeholder="username" aria-label="Enter username" required />
        <input
          placeholder="password"
          type="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
        <button>Submit</button>
      </SC.MemberLoginForm>
    </>
  );
};

export default MemberLogin;
