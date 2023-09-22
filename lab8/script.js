const productList = document.getElementById('productList');
const form = document.getElementById('searchForm');
const searchContent = document.getElementById('searchContent');
const alertMessage = document.getElementById('alertMessage');

async function makeRequest() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  console.log(data);
  data.products.map(
    (product) =>
      (productList.innerHTML += `
    <div class="card mt-2" style="width: 18rem;">
      <img class="card-img-top" src=${product.thumbnail} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">Price: $${product.price}</p>
        <p class="card-text">${product.description}</p>
      </div>
    </div>
    `)
  );
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  searchContent.innerHTML = '';
  alertMessage.setAttribute('hidden', true);
  const searchText = e.target.searchText.value;
  console.log(searchText);
  if (searchText) {
    console.log('hello');
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`
    );
    const data = await res.json();
    if (data.products.length === 0) {
      alertMessage.removeAttribute('hidden');
      alertMessage.innerHTML = 'No matching results';
    }
    data.products.map(
      (product) =>
        (searchContent.innerHTML += `
        <div class="card mt-2" style="width: 18rem;">
          <img class="card-img-top" src=${product.thumbnail} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">${product.description}</p>
          </div>
        </div>
        `)
    );
  } else {
    alertMessage.removeAttribute('hidden');
    alertMessage.innerHTML = 'Please enter a search term';
  }
});

window.onload = (event) => {
  makeRequest();
};
