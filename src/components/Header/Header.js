import React, { useState } from "react";
import * as SC from "./Header.style";
import logo from "../../assets/g2h-logo.svg";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavMenu from "../NavMenu/NavMenu";
import searchGlass from "../../assets/magnifying-glass.svg";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appbar: {
    maxWidth: "100vw",
    backgroundColor: "#eb5a61",
    position: "sticky"
  },
  title: {
    flexGrow: 1,
    alignSelf: "center"
  }
}));

export default function Header({ dataCall, keyword, setKeyword }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="sticky" top="0" left="0">
        <SC.HeaderBox>
          <SC.LogoBox>
            <Link to="/">
              <SC.G2hLogo src={logo} alt="Gateway2Heritage logo" />
            </Link>
          </SC.LogoBox>
          <SC.SearchBox>
            <SC.SearchBarForm>
              <SC.SearchBar
                type="text"
                aria-label="Search for a keyword"
                placeholder="Search"
                onChange={event => setKeyword(event.target.value)}
              />
              <NavLink to={`/search?keyword=${keyword}`}>
                <SC.SearchButton
                  type="submit"
                  onClick={dataCall}
                  data-testid="SEARCH"
                >
                  <img src={searchGlass} alt={"click to search"} />
                </SC.SearchButton>
              </NavLink>
            </SC.SearchBarForm>
          </SC.SearchBox>
          <SC.MenuArea>
            {/* {1 === 1 ? (
              <SC.Basket>
                <Link to="/basket">
                  <SC.MenuButton>View basket</SC.MenuButton>
                </Link>
                <Link to="/basket">
                  {" "}
                  <SC.BasketIcon src={basket} alt="checkout basket" />
                </Link>
              </SC.Basket>
            ) : (
              <SC.LoginSignup>
                <Link to="/memberlogin">
                  <p>Login</p>
                </Link>
                <Link to="membersignup">
                  <p>Sign up</p>
                </Link>
              </SC.LoginSignup>
            )} */}
            <NavMenu />
          </SC.MenuArea>
        </SC.HeaderBox>
        <SC.TitleBar>
          <SC.TitleBox>
            <Link to="/">
              <h1>Gateway2Heritage</h1>
              <SC.Tagline>A living history of Britain</SC.Tagline>
            </Link>
          </SC.TitleBox>
        </SC.TitleBar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  dataCall: PropTypes.func,
  setKeyword: PropTypes.func,
  navMenu: PropTypes.bool,
  setNavMenu: PropTypes.object
};
