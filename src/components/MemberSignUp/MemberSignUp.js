import React from "react";
import * as SC from "./MemberSignUp.style";

const MemberSignUp = () => {
  return (
    <>
      <h2>Member Sign-up</h2>
      <SC.MemberSignUpForm action="/" method="POST">
        <input
          placeholder="username"
          name="username"
          aria-label="Enter username"
          required
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
        <input
          placeholder="confirm password"
          type="password"
          name="confirmedPassword"
          aria-label="Enter password"
          required
        />
        <input
          placeholder="email address"
          type="email"
          id="email"
          name="email"
          aria-label="Enter email address"
          required
        ></input>
        <button>Submit</button>
      </SC.MemberSignUpForm>
    </>
  );
};

export default MemberSignUp;
