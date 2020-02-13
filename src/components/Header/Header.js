import React from "react";
import * as SC from "./Header.style";
import logo from "../../assets/g2h-logo.svg";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ dataCall, setKeyword }) => {
  return (
    <BrowserRouter>
    <SC.HeaderBox>
      <BrowserRouter>
        <SC.LogoBox>
          <Link to="/">
            <SC.G2hLogo src={logo} alt="Gateway2Heritage logo" />
          </Link>
        </SC.LogoBox>
        <SC.Middle>
          <SC.TitleBox>
            <Link to="/">
              <h1>Gateway2Heritage</h1>
            </Link>
          </SC.TitleBox>
          <SC.SearchBox>
            <SC.SearchBar
              placeholder="Search"
              onChange={event => setKeyword(event.target.value)}
            />
            <NavLink to="/search">
              <button onClick={dataCall}>SEARCH</button>
            </NavLink>
          </SC.SearchBox>
        </SC.Middle>
        <SC.MenuArea>
          <a href="/">&#9776; MENU</a>
        </SC.MenuArea>
      </BrowserRouter>
    </SC.HeaderBox>
    </BrowserRouter>
  );
};

Header.propTypes = {
  props: PropTypes.object,
  dataCall: PropTypes.object,
  setKeyword: PropTypes.object,
};

export default Header;
