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
import MemberSignUp from "../MemberSignUp/MemberSignUp";
import MuseumLogin from "../MuseumLogin/MuseumLogin";
import AddNewContent from "../AddNewContent/AddNewContent";
import EditContent from "../EditContent/EditContent";
import MemberProfile from "../MemberProfile/MemberProfile";
import "../../index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/about" component={About} />
        <Route path="/termsandconditions" component={TermsConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/memberlogin" render={() => <MemberLogin />} />
        <Route path="/membersignup" render={() => <MemberSignUp />} />
        <Route path="/museumlogin" render={() => <MuseumLogin />} />{" "}
        <Route path="/profile" render={() => <MemberProfile />} />
        <Route path="/addnewcontent" render={() => <AddNewContent />} />
        <Route path="/editcontent" render={() => <EditContent />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
