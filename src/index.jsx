// react libraries
import React from "react";
import ReactDOM from "react-dom";

// styles
import "./index.scss";

// components
import MainHeader from "./main/MainHeader";
import MainBody from "./main/MainBody";
import Footer from "./common/Footer";

// index component
const App = () => {
  return (
    <div className="main-app">
      <MainHeader />
      <MainBody />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("main-app"));
