import React from "react";
import * as SC from "../styles/Form.style";
import { BrowserRouter, Link } from "react-router-dom";

const MuseumProfile = () => {
  return (
    <>
      <h2>Your profile:</h2>
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
        <button>Change Password</button>
      </SC.FormBox>
      <h3>Your content history:</h3>
      <BrowserRouter>
        <Link to="/addnewcontent">
          <button>Add new content</button>
        </Link>
      </BrowserRouter>
      {/* Display content history/uploads from db */}
    </>
  );
};

export default MuseumProfile;
