import React, { useState } from "react";
import * as SC from "./Header.style";
import logo from "../../assets/g2h-logo.svg";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavMenu from "../NavMenu/NavMenu";
import basket from "../../assets/basket.svg";

const Header = props => {
  const [navMenu, setNavMenu] = useState(false);

  const toggleNav = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      <SC.HeaderBox>
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
            <form>
              <SC.SearchBar
                type="text"
                placeholder="Search"
                onChange={event => props.setKeyword(event.target.value)}
              />
              <NavLink to="/search">
                <button type="submit" onClick={props.dataCall}>
                  SEARCH
                </button>
              </NavLink>
            </form>
          </SC.SearchBox>
        </SC.Middle>
        <SC.MenuArea>
          <SC.Basket>
            <Link to="/basket">
              <p>View basket</p>
            </Link>
            <Link to="/basket">
              {" "}
              <img src={basket} alt="checkout basket" />
            </Link>
          </SC.Basket>
          <SC.MenuButton onClick={toggleNav}>MENU &#9776;</SC.MenuButton>
        </SC.MenuArea>
      </SC.HeaderBox>
      {navMenu && <NavMenu navMenu={navMenu} setnavMenu={setNavMenu} />}
    </>
  );
};

Header.propTypes = {
  dataCall: PropTypes.func,
  setKeyword: PropTypes.func,
  navMenu: PropTypes.bool,
  setNavMenu: PropTypes.object
};

export default Header;
