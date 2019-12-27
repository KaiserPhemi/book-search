// react library
import React from "react";

// components
import UserInput from "./UserInput";

// styles
import "./main.scss";

const dummyBooks = [
  { title: "JS Complete", author: "Kaiser Phemi", numberOfPages: 200 },
  { title: "Golang Deep Dive", author: "Ken Dice", numberOfPages: 200 },
  {
    title: "Kubernettees the Google Way",
    author: "Su Lee",
    numberOfPages: 200
  },
  { title: "RustLang 101", author: "Mark Dice", numberOfPages: 200 },
  { title: "Just git it done", author: "Ben Shapiro", numberOfPages: 200 },
  { title: "The React Way", author: "Donald Trump", numberOfPages: 200 },
  { title: "AWS Deep Dive", author: "Alex Jones", numberOfPages: 200 },
  {
    title: "Algorithms",
    author: "Sergey Brin",
    numberOfPages: 200
  },
  { title: "ML 101", author: "Larry Page", numberOfPages: 200 }
];

/**
 *@desc main body of app consisting of the input field
 */
const MainBody = () => {
  return (
    <div className="book-list">
      {dummyBooks.map((book, index) => (
        <div key={index}>
          <span>{book.title}</span>
        </div>
      ))}
    </div>
  );
};

export default MainBody;
