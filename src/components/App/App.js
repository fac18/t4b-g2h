import React from "react";
import "./App.css";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import SearchPage from "../Search/Search";
import LandingPage from "../LandingPage/LandingPage";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    <>
      <LandingPage />
      {/* <Route path="/" component={*component*} exact*/}
      {/* <Route path="/" render=(() => <Component/>) */}
    </>
    //  </Switch>
    // </BrowserRouter>
  );
};

export default App;
