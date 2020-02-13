import React from "react";
import * as SC from "./MuseumLogin.style";

const MuseumLogin = () => {
  return (
    <>
      <h2>Museum Login</h2>
      <SC.MuseumLoginForm action="/" method="POST">
        <input placeholder="username" aria-label="Enter username" required />
        <input
          placeholder="password"
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
