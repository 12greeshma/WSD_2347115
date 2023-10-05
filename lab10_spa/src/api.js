// api.js
const API_BASE_URL = 'https://api.example.com';

const api = {
  searchProperties: (searchTerm) => {
    const url = `${API_BASE_URL}/properties?search=${searchTerm}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching data:', error);
        return [];
      });
  },
  getPropertyDetails: (propertyId) => {
    const url = `${API_BASE_URL}/properties/${propertyId}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching property details:', error);
        return null;
      });
  },
  // Add more API functions as needed
};

export default api;
