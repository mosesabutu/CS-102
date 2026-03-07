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

export function increaseQuantity(id) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) item.quantity += 1;

  saveCart(cart);
  refreshCartUI();
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
  refreshCartUI();
  updateBadge();
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
  const lastItem = cart.at(-1);

  const wrapper = document.createElement("div");
  wrapper.id = "#cartDrawer";

  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;

    const card = document.createElement("div");
    card.style.borderBottom = "1px solid #ddd";
    card.style.padding = "10px 0";
    card.id = "cartItems";
    card.class = "cartItems";

    card.innerHTML = `
      <img src="${item.img}" width="60"/>
      <div class ="itemInfo">
      <p>${item.name}</p>
      <p>$${item.price}</p>
      <span>Qty: ${item.quantity}</span>
      <button data-inc="${item.id}">+</button>
      <button data-dec="${item.id}">-</button>
      </div>
    `;

    wrapper.appendChild(card);
    return cart;
  });

  const summary = document.createElement("div");
  summary.id = "summary";
  summary.innerHTML = `
    <h3>Cart Subtotal:{${getCartCount()}} $${calculateSubtotal().toFixed(2)}</h3>
    <h3 class = "toHide">Shipping: $${calculateShipping().toFixed(2)}</h3>
    <h2 class = "toHide">Total: $${calculateTotal().toFixed(2)}</h2>
  `;

  wrapper.appendChild(summary);

  return { wrapper, lastItem };
}

export function refreshCartUI() {
  const container = document.getElementById("cart");
  if (!container) return;

  container.innerHTML = "";
  container.appendChild(showCart());

  attachButtonEvents();
}

function attachButtonEvents() {
  document.querySelectorAll("[data-inc]").forEach((btn) => {
    btn.addEventListener("click", () => {
      increaseQuantity(btn.dataset.inc);
    });
  });

  document.querySelectorAll("[data-dec]").forEach((btn) => {
    btn.addEventListener("click", () => {
      decreaseQuantity(btn.dataset.dec);
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
