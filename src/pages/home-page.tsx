import React, { useEffect, useState } from "react";
import RouterProps from "../types/router-props";
import BookTile from "../components/book-tile";
import db from "../core/db";
import { event } from "../core/event";
import { NEW_BOOKS_HAS_ADDED } from "../events/upload-events";

// eslint-disable-next-line no-unused-vars
function HomePage(props: RouterProps): JSX.Element {
  const [books, setBooks] = useState([]);

  async function getBooks(): Promise<any> {
    setBooks(await db.books.find({}));
  }

  useEffect(() => {
    getBooks();
    event.subscribe(NEW_BOOKS_HAS_ADDED, getBooks);
  }, []);
  return (
    <div className="container">
      <div className="container__row">
        {books.map((book: any) => (
          // eslint-disable-next-line no-underscore-dangle
          <BookTile id={book.bookId} title={book.title} author={book.authorName} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
