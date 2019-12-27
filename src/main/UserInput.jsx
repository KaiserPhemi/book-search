// react libraries
import React, { Fragment } from "react";

// styles
import "./user-input.scss";

const UserInput = () => {
  return (
    <Fragment>
      <label htmlFor="user-input">
        <input
          className="user-input"
          placeholder="Enter author's name or book title"
        />
      </label>
    </Fragment>
  );
};

export default UserInput;
