import React from 'react';

function BookList({ books, onReviewSubmit }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>{book.description}</p>
          <button onClick={() => onReviewSubmit(book.id)}>Write a Review</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
