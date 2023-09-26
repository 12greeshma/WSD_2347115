import React, { useState, useEffect } from 'react';
import './App.css';
import BookSearch from './BookSearch';
import BookList from './BookList';
import ReviewForm from './ReviewForm';
import booksData from './booksData'; // Import the book data

function App() {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Initialize books with the imported data when the component mounts
    setBooks(booksData);
  }, []);

  // Function to handle book search
  const handleSearch = (searchTerm) => {
    // Implement book search logic here
    // For this example, we'll filter books based on the search term (case-insensitive)
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  // Function to handle review submission
  const handleReviewSubmit = (bookId, rating, comment) => {
    // Implement review submission logic here
    // Create a new review object and add it to the 'reviews' state
    const newReview = {
      bookId,
      rating,
      comment,
      id: reviews.length + 1, // Generate a unique review ID
    };
    setReviews([...reviews, newReview]);
    setSelectedBook(null); // Clear the selected book after submission
  };

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <BookSearch onSearch={handleSearch} />
      <BookList books={books} onReviewSubmit={(bookId) => setSelectedBook(bookId)} />
      {selectedBook && (
        <ReviewForm
          bookId={selectedBook}
          onSubmit={(rating, comment) => {
            handleReviewSubmit(selectedBook, rating, comment);
          }}
        />
      )}
    </div>
  );
}

export default App;




