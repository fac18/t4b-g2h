import React, { useState } from "react";
import * as SC from "./Header.style";
import logo from "../../assets/g2h-logo.svg";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState(null);

  const dataCall = async () => {
    await (
      await fetch(
        `/.netlify/functions/getKeyword/getKeyword.js?keywords=${keyword}`
      )
    )
      .json()
      .then(data => console.log(data))
      .catch(console.error);
  };

  return (
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
            <button onClick={dataCall}>SEARCH</button>
          </SC.SearchBox>
        </SC.Middle>
        <SC.MenuArea>
          <a href="/">&#9776; MENU</a>
        </SC.MenuArea>
      </BrowserRouter>
    </SC.HeaderBox>
  );
};

export default Header;
