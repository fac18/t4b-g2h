import React from "react";
import "./App.css";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import LandingPage from "../LandingPage/LandingPage";
import SearchPage from "../Search/Search";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    <>
      <SearchPage />
      {/* <Route path="/" component={*component*} exact*/}
      {/* <Route path="/" render=(() => <Component/>) */}
    </>
    //  </Switch>
    // </BrowserRouter>
  );
};

export default App;
