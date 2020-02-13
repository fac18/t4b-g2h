import React from "react";
import * as SC from "../styles/Form.style";

const MemberSignUp = () => {
  return (
    <>
      <h2>Member Sign-up</h2>
      <SC.FormBox action="/" method="POST">
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          id="username"
          aria-label="Enter username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
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
          required
        ></input>
        <button>Submit</button>
      </SC.FormBox>
    </>
  );
};

export default MemberSignUp;
