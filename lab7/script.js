document.addEventListener("DOMContentLoaded", function () 
{
  const fetchBooksButton = document.getElementById("fetchBooks");
  const resultsDiv = document.getElementById("results");

  fetchBooksButton.addEventListener("click", function () 
  {
    //fetching json data
    fetch("books.json")
      .then((response) => 
      {
        if (!response.ok) 
        {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((booksData) => 
      {
        displayBooks(booksData);
      })
      .catch((error) =>
      {
        console.error("Error fetching books:", error);
      });
  });

  function displayBooks(booksData)
   {
   
    resultsDiv.innerHTML = "";

    booksData.forEach(function (book) 
    {
      //box
      const bookBox = document.createElement("div");
      bookBox.classList.add("book-box");

      
      const titleElement = document.createElement("h2");
      titleElement.textContent = book.title;

      const authorElement = document.createElement("p");
      authorElement.textContent = `Author: ${book.author}`;

      const yearElement = document.createElement("p");
      yearElement.textContent = `Year: ${book.year}`;

      
      bookBox.appendChild(titleElement);
      bookBox.appendChild(authorElement);
      bookBox.appendChild(yearElement);

    
      resultsDiv.appendChild(bookBox);
    });
  }
});
