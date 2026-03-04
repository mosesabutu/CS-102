// 30 Specific Unique Products
const myProducts = [
  {
    name: "Urban Bomber Jacket",
    price: "$120",
    cat: "Clothes",
    img: "images/bomber.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Diamond Studs",
    price: "$250",
    cat: "Jewelry",
    img: "images/studs.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Retro High-Tops",
    price: "$110",
    cat: "Shoes",
    img: "images/high-tops.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Midnight Clutch",
    price: "$85",
    cat: "Handbags",
    img: "images/clutch.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Distressed Denim",
    price: "$90",
    cat: "Clothes",
    img: "images/denim.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Cuban Link Bracelet",
    price: "$65",
    cat: "Jewelry",
    img: "images/cubanlink.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Leather Loafers",
    price: "$140",
    cat: "Shoes",
    img: "images/loafers.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Suede Crossbody",
    price: "$115",
    cat: "Handbags",
    img: "images/crossbody.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Silk Slip Dress",
    price: "$130",
    cat: "Clothes",
    img: "images/silk.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Pearl Drop Earrings",
    price: "$180",
    cat: "Jewelry",
    img: "images/pearl.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Mesh Runners",
    price: "$95",
    cat: "Shoes",
    img: "images/mesh.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Structured Tote",
    price: "$210",
    cat: "Handbags",
    img: "images/tote.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Oversized Hoodie",
    price: "$75",
    cat: "Clothes",
    img: "images/hoodie.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Gold Band Ring",
    price: "$50",
    cat: "Jewelry",
    img: "images/bandring.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Platform Boots",
    price: "$160",
    cat: "Shoes",
    img: "images/boots.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Mini Satin Bag",
    price: "$60",
    cat: "Handbags",
    img: "images/satinbag.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Cargo Joggers",
    price: "$85",
    cat: "Clothes",
    img: "images/joggers.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Silver Choker",
    price: "$45",
    cat: "Jewelry",
    img: "images/choker.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Canvas Slip-ons",
    price: "$55",
    cat: "Shoes",
    img: "images/canvas.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Quilted Shoulder Bag",
    price: "$190",
    cat: "Handbags",
    img: "images/shoulderbag.jpeg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Pleated Midi Skirt",
    price: "$70",
    cat: "Clothes",
    img: "images/midiskirt.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Emerald Pendant",
    price: "$320",
    cat: "Jewelry",
    img: "images/pendant.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Suede Chelsea Boots",
    price: "$175",
    cat: "Shoes",
    img: "images/chelsea.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Workplace Satchel",
    price: "$240",
    cat: "Handbags",
    img: "images/satchel.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Graphic Streetwear Tee",
    price: "$40",
    cat: "Clothes",
    img: "images/streetwear.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Ankle Cuff Bangle",
    price: "$55",
    cat: "Jewelry",
    img: "images/bangle.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Velvet Mules",
    price: "$125",
    cat: "Shoes",
    img: "images/mules.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Woven Bucket Bag",
    price: "$95",
    cat: "Handbags",
    img: "images/satinbag.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Leather Biker Jacket",
    price: "$290",
    cat: "Clothes",
    img: "images/biker.jpg",
    avgRating: 4.5,
    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
  {
    name: "Sapphire Nose Stud",
    price: "$80",
    cat: "Jewelry",
    img: "images/nosestud.jpg",
    avgRating: 4.5,

    totalReviews: 12,
    sizes: ["S", "M", "L", "XL"],
    desc: "A structured, water-resistant outer layer perfect for an edgy streetwear look.",
  },
];

// 3. Core Display Function
function renderProducts(productsToDisplay) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const sizeHTML = product.sizes
      ? product.sizes
          .map(
            (s) =>
              `<button class="size-chip" onclick="selectSize(this)">${s}</button>`,
          )
          .join("")
      : '<span class="size-chip">One Size</span>';

    card.innerHTML = `
            <div class="img-container">
                <button class="wishlist-btn" onclick="updateWishlist(this, '${product.name}')">♡</button>
                <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/250?text=Image+Missing'">
            </div>
            <div class="product-info">
                <p class="category-tag">${product.cat}</p>
                <h3>${product.name}</h3>
                <div class="rating-display" onclick="openFeedback('${product.name}')">⭐ ${product.rating || 5.0}</div>
                <div class="size-options">${sizeHTML}</div>
                <p class="price">${product.price}</p>
            </div>
            <div class="button-group">
                <button class="buy-now-btn" onclick="buyNow('${product.name}')">BUY NOW</button>
                <button class="shop-btn" onclick="updateCart('${product.name}', '${product.price}', '${product.img}')">ADD TO CART</button>
            </div>
        `;
    grid.appendChild(card);
  });
}

// 4. Interactive Functions
function selectSize(btn) {
  const parent = btn.parentElement;
  parent
    .querySelectorAll(".size-chip")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
}
// State variable
let cartItems = JSON.parse(localStorage.getItem("myCart")) || [];
let wishlistItems = 0;
let cartItemsNames = [];
let wishlistItemsNames = 0;
let totalPrice = 0;

function updateCart(name, price, img) {
  const newItem = { name: name, price: price, img: img };
  cartItems.push(newItem);
  // document.getElementById("cart-count").innerText = cartItems;

  localStorage.setItem("myCart", JSON.stringify(cartItems));

  const numericPrice = Number(price.replace("$", ""));
  totalPrice += numericPrice;

  const totalDisplay = document.getElementById("cart-total");
  if (totalDisplay) {
    totalDisplay.innerText = `$${totalPrice.toFixed(2)}`;
  }

  const list = document.getElementById("cart-items-list");
  if (list) {
    const item = document.createElement("div");
    item.className = "cart-item-row";
    item.innerHTML = `<span>${name}</span> <span>${price}</span>`;
    list.appendChild(item);
  }
  console.log(newItem);
}

function updateWishlist(btn, name) {
  if (btn.innerText === "♡") {
    btn.innerText = "❤️";
    wishlistItems++;
  } else {
    btn.innerText = "♡";
    wishlistItems--;
  }
  document.getElementById("wishlist-count").innerText = wishlistItems;
}

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").style.display = "none";
}

function openFeedback(name) {
  alert(`Feedback for ${name}: Great Choice!`);
}

function buyNow(name) {
  alert(`Redirecting to checkout for ${name}...`);
}

function filterProducts(category) {
  if (category === "all") {
    renderProducts(myProducts);
  } else {
    const filtered = myProducts.filter((p) => p.cat === category);
    renderProducts(filtered);
  }
}

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// 5. Execution
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(myProducts);
});
