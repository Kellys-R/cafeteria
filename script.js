// buscar o blogs
const searchInput = document.querySelector('.search-form input');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const products = document.querySelectorAll('.card-product h3');

  products.forEach(product => {
    const name = product.textContent.toLowerCase();
    product.closest('.card-product').style.display = 
      name.includes(term) ? 'block' : 'none';
  });
});
//contador del carrito
let cartCount = 0;
const cartnumber = document.querySelector('.container-shopping .number');
const addbuttons = document.querySelectorAll('.add-cart');

addbuttons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartNumber.textContent = `(${cartCount})`;
  });
});
let cart = [];
let total = 0;

const cartNumber = document.querySelector('.container-shopping .number');
const addButtons = document.querySelectorAll('.add-cart');
const cartContainer = document.querySelector('.cart-container');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const clearBtn = document.querySelector('.btn-clear');
const cartIcon = document.querySelector('.fa-basket-shopping');

// Mostrar/Ocultar carrito
cartIcon.addEventListener('click', () => {
  cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

// Agregar productos al carrito
addButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const productCard = e.target.closest('.card-product');
    const name = productCard.querySelector('h3').textContent;
    const price = parseFloat(productCard.querySelector('.price').textContent.replace('Q',''));

    // Agregar producto al arreglo
    cart.push({ name, price });
    total += price;

    updateCart();
  });
});

// Vaciar carrito
clearBtn.addEventListener('click', () => {
  cart = [];
  total = 0;
  updateCart();
});

// Actualizar contenido del carrito
function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Q${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: Q${total.toFixed(2)}`;
  cartNumber.textContent = `(${cart.length})`;
}
