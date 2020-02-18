import React from "react";
import { NavLink } from "react-router-dom";
import * as SC from "./NavMenu.style";

const NavMenu = () => {
  return (
    <SC.HackBox>
      <SC.NavList>
        <NavLink to="/" activeClassName="selected">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          <li>About</li>
        </NavLink>
        <NavLink to="/partners" activeClassName="selected">
          <li>Partners</li>
        </NavLink>
        <NavLink to="/memberlogin" activeClassName="selected">
          <li>Login</li>
        </NavLink>
        <NavLink to="/membersignup" activeClassName="selected">
          <li>Sign-Up</li>
        </NavLink>
      </SC.NavList>
    </SC.HackBox>
  );
};

export default NavMenu;
