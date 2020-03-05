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
import PreviewPage from "../PreviewPage/PreviewPage";
import Error from "../Error/Error";

import "../../index.css";

const App = () => {
  const [keyword, setKeyword] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [museumData, setMuseumData] = useState(null);
  const [filteredResult, setFilteredResult] = useState(null);

  const dataCall = async keyword => {
    await (
      await fetch(
        `/.netlify/functions/getKeyword/getKeyword.js?keywords=${keyword}`
      )
    )

      .json()
      .then(data => setSearchResult(data))
      .catch(console.error);
  };

  //Fetching museum data
  const museumDataCall = async () => {
    await (await fetch("/.netlify/functions/getMuseumData/getMuseumData.js"))
      .json()
      .then(data => setMuseumData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    museumDataCall();
  }, []);

  React.useEffect(() => {
    dataCall(keyword);
  }, [keyword]);

  return (
    <BrowserRouter>
      <Header dataCall={dataCall} setKeyword={setKeyword} keyword={keyword} />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/about" component={About} />
        <Route path="/termsandconditions" component={TermsConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route
          path="/search"
          render={props => (
            <Search
              {...props}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              filteredResult={filteredResult}
              setFilteredResult={setFilteredResult}
              keyword={keyword}
              setKeyword={setKeyword}
            />
          )}
        />
        <Route
          path="/previewpage"
          render={props => (
            <PreviewPage
              {...props}
              searchResult={searchResult}
              setKeyword={setKeyword}
            />
          )}
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
        <Route
          path="/museuminfo/:id"
          render={props => <MuseumInfo {...props} museumData={museumData} />}
        />
        <Route path="/payment" render={() => <Payment />} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
