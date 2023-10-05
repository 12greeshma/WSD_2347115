import React from 'react';
import './styles.css';
const PropertyDetailsComponent = ({ property }) => {
  return (
    <div>
      <h1>{property.title}</h1>
      <p>Price: {property.price}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Location: {property.location}</p>
      <p>Description: {property.description}</p>
      {/* Display other property details */}
    </div>
  );
};

export default PropertyDetailsComponent;
