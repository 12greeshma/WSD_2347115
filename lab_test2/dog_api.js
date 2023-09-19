const bookList = document.getElementById('dog-image');


const apiUrl = 'https://dog.ceo/api/breeds/image/random'; 


fetch(apiUrl)
  .then((response) => 
  {
    if (!response.ok) 
    {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => 
  {
    
    data.forEach((dog) => 
    {
      const listItem = document.createElement('li');
      listItem.textContent = `${dog.breed} by ${dog.color}`;
      bookList.appendChild(listItem);
    });
  })
  .catch((error) => 
  {
    console.error('Error fetching data:', error);
  });