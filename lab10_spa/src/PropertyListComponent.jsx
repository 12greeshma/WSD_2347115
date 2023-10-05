import React from 'react';
import './styles.css';
const PropertyListComponent = ({ properties, onSelectProperty }) => {
  return (
    <div>
      {properties.map((property) => (
        <div key={property.id} onClick={() => onSelectProperty(property)}>
          <h2>{property.title}</h2>
          <p>Price: {property.price}</p>
          {/* Display other property details */}
        </div>
      ))}
    </div>
  );
};

export default PropertyListComponent;
