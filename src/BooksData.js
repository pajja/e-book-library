import { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "./BookItem.js";

function BooksData() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/data")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <p>It looks like you're not connected to the server</p>
      </div>
    );

  return (
    <div>
      {books.map((book) => (
        <BookItem book={book} />
      ))}
    </div>
  );
}

export default BooksData;
