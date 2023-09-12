import React from "react";
import BooksData from "./BooksData.js";

const book1 = {
  title: "1984",
  author: "George Orwell",
  release_year: "1949",
  description:
    "Set in a dystopian future, the novel delves into the life of Winston Smith, a citizen of a totalitarian regime led by the enigmatic Big Brother. The story tackles themes of surveillance, government control, and individuality.",
};

function App() {
  return (
    <div>
      <div>E-Book-Library</div>
      <div>{/* <BookItem book={BooksData.books} /> */}</div>
      <div>
        <BooksData />
      </div>
    </div>
  );
}

export default App;
