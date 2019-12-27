// react library
import React from "react";

// components
import UserInput from "../main/UserInput";

// styles
import "./header.scss";

const MainHeader = () => {
  return (
    <div className="main-header">
      <section className="input-section">
        <UserInput />
      </section>
    </div>
  );
};

export default MainHeader;
