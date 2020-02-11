import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import SearchPage from "../Search/Search";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  const dataCall = async () => {
    await (await fetch("/.netlify/functions/getData/getData.js"))
      .json()
      // .then(data => JSON.stringify(data))
      .then(data => console.log(data))
      .catch(console.error);
  };

  return (
    // <BrowserRouter>
    //   <Switch>
    <>
      <Header />
      <button onClick={dataCall}>Test</button>
      <LandingPage />
      <Footer />

      {/* <Route path="/" component={*component*} exact*/}
      {/* <Route path="/" render=(() => <Component/>) */}
    </>
    //  </Switch>
    // </BrowserRouter>
  );
};

export default App;
