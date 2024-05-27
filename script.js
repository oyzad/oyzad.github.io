// Fetch product data from an API or local data source
const productData = [
  { id: 1, name: 'Field Hockey Stick', price: 49.99, image: 'stick.jpg' },
  { id: 2, name: 'Field Hockey Ball', price: 9.99, image: 'ball.jpg' },
  { id: 3, name: 'Field Hockey Shoes', price: 79.99, image: 'shoes.jpg' },
  // Add more product data here
];

// Function to create a product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = `images/${product.image}`;
  image.alt = product.name;

  const name = document.createElement('h3');
  name.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = `$${product.price.toFixed(2)}`;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);

  return card;
}

// Render product cards on the page
const productGrid = document.querySelector('.product-grid');
productData.forEach(product => {
  const card = createProductCard(product);
  productGrid.appendChild(card);
});
