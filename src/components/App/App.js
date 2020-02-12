import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Search from "../Search/Search";

const App = () => {
  const dataCall = async () => {
    await (await fetch("/.netlify/functions/getData/getData.js"))
      .json()
      // .then(data => JSON.stringify(data))
      .then(data => console.log(data))
      .catch(console.error);
  };

  return (
    <>
      <Header />
      <button onClick={dataCall}>Test</button>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/about" component={About} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
