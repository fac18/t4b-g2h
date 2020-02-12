import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Search from "../Search/Search";
import TermsConditions from "../TermsConditions/TermsConditions";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import MemberLogin from "../MemberLogin/MemberLogin";
import "../../index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/about" component={About} />
          <Route path="/termsandconditions" component={TermsConditions} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/search" render={() => <Search />} />
          <Route path="/memberlogin" render={() => <MemberLogin />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
