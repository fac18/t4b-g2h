import React, { useState } from "react";
import * as SC from "./Header.style";
import logo from "../../assets/g2h-logo.svg";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavMenu from "../NavMenu/NavMenu";
import basket from "../../assets/basket.svg";
import searchGlass from "../../assets/magnifying-glass.svg";

const Header = ({ dataCall, keyword, setKeyword }) => {
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
            <SC.SearchBarForm>
              <SC.SearchBar
                type="text"
                placeholder="Search"
                onChange={event => setKeyword(event.target.value)}
              />
              <NavLink to={`/search?keyword=${keyword}`}>
                <SC.SearchButton
                  type="submit"
                  onClick={props.dataCall}
                  data-testid="SEARCH"
                >
                  <img src={searchGlass} alt={"click to search"} />
                </SC.SearchButton>
              </NavLink>
            </SC.SearchBarForm>
          </SC.SearchBox>
        </SC.Middle>
        <SC.MenuArea>
          <SC.Basket>
            <Link to="/basket">
              <SC.MenuButton>View basket</SC.MenuButton>
            </Link>
            <Link to="/basket">
              {" "}
              <SC.BasketIcon src={basket} alt="checkout basket" />
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
