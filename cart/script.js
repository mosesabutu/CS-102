// cart.js

const CART_KEY = "my_cart";
const SHIPPING_COST = 15;
const FREE_SHIPPING_THRESHOLD = 200;

// =====================
// Core Storage
// =====================

export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// =====================
// Cart Mutations
// =====================

export function updateCart(name, price, img, id) {
  const cart = getCart();
  const existing = cart.find((item) => item.name === name);

  let targetItem; // This will hold the item that was changed

  if (existing) {
    existing.quantity += 1;
    targetItem = existing;
  } else {
    targetItem = {
      id: id,
      name,
      price: Number(price),
      img: "../product/" + img,
      quantity: 1,
    };
    cart.push(targetItem);
  }

  saveCart(cart);
  updateBadge();

  return targetItem;
}

export function updateQuantity(id, newQuantity) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) item.quantity = Number(newQuantity);

  saveCart(cart);
  showCart();
  updateBadge();
}

export function decreaseQuantity(id) {
  let cart = getCart();

  cart = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    )
    .filter((item) => item.quantity > 0);

  saveCart(cart);
  updateBadge();
}

export function removeFromCart(id) {
  const cart = getCart();
  const item = cart.find((i) => String(i.id) === String(id));

  // Ask for confirmation using the item name if found
  const itemName = item ? item.name : "this item";
  const confirmed = confirm(
    `Are you sure you want to remove ${itemName} from your cart?`,
  );

  if (confirmed) {
    const updatedCart = cart.filter((i) => String(i.id) !== String(id));
    saveCart(updatedCart);
    showCart();
    updateBadge();
  }
}

// =====================
// Calculations
// =====================

export function calculateSubtotal() {
  return getCart().reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

export function calculateShipping() {
  const subtotal = calculateSubtotal();
  return subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0
    ? 0
    : SHIPPING_COST;
}

export function calculateTotal() {
  return calculateSubtotal() + calculateShipping();
}

export function getCartCount() {
  return getCart().reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}

// =====================
// UI Helpers
// =====================

export function updateBadge() {
  const badge = getCartCount();
  return badge;
}

export function showCart() {
  const cart = getCart();
  const main = document.getElementById("cart-page");
  if (!main) return;

  const mainPage =
    cart.length > 0
      ? `
    <h2><span id="cartCount">${cart.length}</span> ITEMS IN YOUR CART</h2>
    <div id="wrapper">
      <div id="cartWrapper">
        ${cart
          .map((item) => {
            // Generate 10 options and mark the current quantity as selected
            let options = "";
            for (let i = 1; i <= 10; i++) {
              const isSelected = item.quantity === i ? "selected" : "";
              options += `<option value="${i}" ${isSelected}>${i}</option>`;
            }

            return `
          <div id="cartItem">
            <img src="${item.img}" alt="${item.name}" width="60"/>
            <div class="itemInfo">
              <p>${item.name}</p>
              <p>$${item.price}</p>
              <div class="qty-controls">

   
              <label for="qty-${item.id}">Qty: </label>
              <select data-qty-select="${item.id}" id="qty-${item.id}">
                ${options}
              </select>
              <button class="remove-btn" data-remove="${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
 </div>
            </div>
          </div>`;
          })
          .join("")}
       </div>
       <div class="summary">
          <p>Subtotal: (${getCartCount()} items)
            <span>$${calculateSubtotal().toFixed(2)}</span> 
          </p>
       </div>
    </div>
    <div class="cartFooter">
      <button><a href="../product/index.html">BACK TO SHOPPING</a></button>
      <button>CHECKOUT</button>
    </div>`
      : `
    <div class="empty-cart">
      <h2>Your cart is empty</h2>
      <button><a href="../product/index.html">GO SHOPPING</a></button>
    </div>`;

  main.innerHTML = mainPage;

  attachQuantityEvents();
}

export function refreshCartUI() {
  // const main = document.getElementById("cart-page");
  // if (!main) return;
  // main.innerHTML = "";
  // main.appendChild(showCart());
}

function attachQuantityEvents() {
  document.querySelectorAll("[data-qty-select]").forEach((select) => {
    select.addEventListener("change", (event) => {
      // event.target.value gets the 1-10 value from the chosen <option>
      const newQuantity = event.target.value;
      const productId = select.dataset.qtySelect;

      updateQuantity(productId, newQuantity);
    });
  });

  document.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.dataset.remove);
    });
  });
}

// =====================
// Sync Across Tabs
// =====================

window.addEventListener("storage", (event) => {
  if (event.key === CART_KEY) {
    refreshCartUI();
    updateBadge();
  }
});
