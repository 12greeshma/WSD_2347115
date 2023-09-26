import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onSubmit(rating, comment);
    setRating(5); // Reset rating to the default value
    setComment(''); // Clear the comment field
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
}


export default ReviewForm;
