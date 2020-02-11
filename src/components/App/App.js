import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import SearchPage from "../Search/Search";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    <>
      <Header />
      <LandingPage />
      {/* <Route path="/" component={*component*} exact*/}
      {/* <Route path="/" render=(() => <Component/>) */}
    </>
    //  </Switch>
    // </BrowserRouter>
  );
};

export default App;
