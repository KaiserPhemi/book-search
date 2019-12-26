// react libraries
import React from "react";
import ReactDOM from "react-dom";

// components
import MainBody from "./main/MainBody";
import Footer from "./common/Footer";

// index component
const App = () => {
  return (
    <div>
      <MainBody />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("main-app"));
