document.addEventListener("DOMContentLoaded", function () 
{
  const fetchdataButton = document.getElementById("fetchdata");
  const resultsDiv = document.getElementById("results");

  fetchdataButton.addEventListener("click", function () 
  {
    //fetching json data
    fetch("dogs.json")
      .then((response) => 
      {
        if (!response.ok) 
        {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((dogsData) => 
      {
        displaydata(dogsData);
      })
      .catch((error) =>
      {
        console.error("Error fetching dogs data:", error);
      });
  });

  function displaydata(dogsData)
   {
   
    resultsDiv.innerHTML = "";

    dogsData.forEach(function (dog) 
    {
      //box
      const dogBox = document.createElement("div");
      dogBox.classList.add("dog-box");

      
      const breedElement = document.createElement("h2");
      breedElement.textContent = `Breed:${dog.Breed}`;
    
      const colorElement = document.createElement("h2");
      colorElement.textContent = `color: ${dog.Color}`;

      const countryElement = document.createElement("h2");
      countryElement.textContent = `country: ${dog.Country}`;

      
      dogBox.appendChild(breedElement);
      dogBox.appendChild(colorElement);
      dogBox.appendChild(countryElement);

    
      resultsDiv.appendChild(dogBox);
    });
  }
});
