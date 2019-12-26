// react library
import React from "react";

// styles
import "./main.scss";

/**
 *@desc main body of app consisting of the input field
 */
const MainBody = () => {
  return (
    <div>
      <label htmlFor="">
        <input
          className="user-input"
          placeholder="Enter author's name or book title"
        />
      </label>
    </div>
  );
};

export default MainBody;
