import React, { useState } from "react";
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
import MuseumProfile from "../MuseumProfile/MuseumProfile";
import Basket from "../Basket/Basket";
import Partners from "../Partners/Partners";
import MuseumInfo from "../MuseumInfo/MuseumInfo";
import Payment from "../Payment/Payment";
import "../../index.css";

const App = () => {
  const [keyword, setKeyword] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  const dataCall = async () => {
    await (
      await fetch(
        `/.netlify/functions/getKeyword/getKeyword.js?keywords=${keyword}`
      )
    )
      .json()
      .then(data => setSearchResult(data))
      .catch(console.error);
  };

  const [museumData, setMuseumData] = useState(null);

  const museumDataCall = async () => {
    await (await fetch("/.netlify/functions/getMuseumData/getMuseumData.js"))
      .json()
      .then(data => setMuseumData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    museumDataCall();
  }, []);
  return (
    <BrowserRouter>
      <Header dataCall={dataCall} setKeyword={setKeyword} />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/about" component={About} />
        <Route path="/termsandconditions" component={TermsConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route
          path="/search"
          render={() => <Search searchResult={searchResult} />}
        />
        <Route path="/memberlogin" render={() => <MemberLogin />} />
        <Route path="/membersignup" render={() => <MemberSignUp />} />
        <Route path="/museumlogin" render={() => <MuseumLogin />} />
        <Route path="/profile" render={() => <MemberProfile />} />
        <Route path="/museumprofile" render={() => <MuseumProfile />} />
        <Route path="/addnewcontent" render={() => <AddNewContent />} />
        <Route path="/editcontent" render={() => <EditContent />} />
        <Route path="/basket" render={() => <Basket />} />
        <Route
          path="/partners"
          render={() => <Partners museumData={museumData} />}
        />
        <Route path="/museuminfo" component={MuseumInfo} />
        <Route path="/payment" render={() => <Payment />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
