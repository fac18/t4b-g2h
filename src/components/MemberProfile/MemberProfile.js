import React from "react";
import * as SC from "./MemberProfile.style";

const MemberProfile = () => {
  return (
    <>
      <h2>Your profile:</h2>
      <SC.MemberProfileForm action="/" method="POST">
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
      </SC.MemberProfileForm>
      <h3>Your purchases:</h3>
      {/* Display purchases content from db */}
    </>
  );
};

export default MemberProfile;
