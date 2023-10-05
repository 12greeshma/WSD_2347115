import React, { useState } from 'react';

const InquiryFormComponent = ({ property, onSubmitInquiry }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitInquiry({ propertyId: property.id, name, email, message });
    setSubmitted(true); // Set submitted to true after form submission
  };

  return (
    <div className="inquiry-form">
      {submitted ? (
        <div className="confirmation-message">
          Thank you for your inquiry! We will get back to you soon.
        </div>
      ) : (
        <>
          <h2>Submit Inquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit Inquiry</button>
          </form>
        </>
      )}
    </div>
  );
};

export default InquiryFormComponent;
