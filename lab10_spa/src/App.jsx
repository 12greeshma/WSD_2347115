import React, { useState } from 'react';
import './styles.css';
import PropertySearchComponent from './PropertySearchComponent';
import PropertyListComponent from './PropertyListComponent';
import PropertyDetailsComponent from './PropertyDetailsComponent';
import InquiryFormComponent from './InquiryFormComponent'; // Import the InquiryFormComponent
import propertyData from './propertyData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSearch = (term) => {
    const filteredProperties = propertyData.filter(property =>
      property.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredProperties);
    setSelectedProperty(null);
  };

  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
  };

  const handleInquirySubmission = (inquiryData) => {
    // Handle the inquiry submission logic here, e.g., send the data to the server.
    console.log('Inquiry submitted:', inquiryData);
  };

  return (
    <div>
      <PropertySearchComponent onSearch={handleSearch} />
      <PropertyListComponent properties={searchResults} onSelectProperty={handleSelectProperty} />
      {selectedProperty && <PropertyDetailsComponent property={selectedProperty} />}
      {selectedProperty && <InquiryFormComponent property={selectedProperty} onSubmitInquiry={handleInquirySubmission} />}
    </div>
  );
};

export default App;
