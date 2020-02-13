import React from "react";
import * as SC from "./MuseumLogin.style";

const MuseumLogin = () => {
  return (
    <>
      <h2>Museum Login</h2>
      <SC.MuseumLoginForm action="/" method="POST">
        <label htmlFor="username">Username:</label>
        <input aria-label="Enter username" id="username" required />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          aria-label="Enter password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
        <button>Login</button>
        <button>Sign-up</button>
      </SC.MuseumLoginForm>
    </>
  );
};

export default MuseumLogin;
