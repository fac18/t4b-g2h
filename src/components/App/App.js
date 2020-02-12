import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Search from "../Search/Search";
import TermsConditions from "../TermsConditions/TermsConditions";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import "../../index.css";

const App = () => {
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
    <>
      <BrowserRouter>
        <Header dataCall={dataCall} setKeyword={setKeyword} />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/about" component={About} />
          <Route path="/termsandconditions" component={TermsConditions} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
