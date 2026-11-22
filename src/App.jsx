import { useEffect, useMemo, useState } from "react";
import ProductCard from "./components/productCard.jsx";

import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 2499,
    oldPrice: 3999,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    badge: "Best Seller",
    discount: "38% OFF",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 1999,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    badge: "New Arrival",
    discount: "33% OFF",
  },
  {
    id: 3,
    name: "Digital Camera",
    category: "Cameras",
    price: 15999,
    oldPrice: 19999,
    rating: 4.7,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    badge: "Popular",
    discount: "20% OFF",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 1499,
    oldPrice: 2499,
    rating: 4.4,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    badge: "",
    discount: "40% OFF",
  },
  {
    id: 5,
    name: "Premium Laptop",
    category: "Computers",
    price: 64999,
    oldPrice: 74999,
    rating: 4.9,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    badge: "Best Seller",
    discount: "13% OFF",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 799,
    oldPrice: 1299,
    rating: 4.3,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    badge: "",
    discount: "38% OFF",
  },
  {
    id: 7,
    name: "Modern Smartphone",
    category: "Mobiles",
    price: 28999,
    oldPrice: 32999,
    rating: 4.6,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    badge: "New Arrival",
    discount: "12% OFF",
  },
  {
    id: 8,
    name: "Tablet",
    category: "Computers",
    price: 22999,
    oldPrice: 26999,
    rating: 4.5,
    reviews: 155,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    badge: "",
    discount: "15% OFF",
  },
  {
    id: 9,
    name: "Mobile",
    category: "Mobiles",
    price: 30000,
    oldPrice: 28999,
    rating: 4.5,
    reviews: 200,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/324688_0_cyhTfxiOb.png?updatedAt=1784024871117",
    badge: "",
    discount: "15% OFF",
  },
  {
    id: 10,
    name: "Gaming Laptop",
    category: "Computers",
    price: 79999,
    oldPrice: 94999,
    rating: 4.8,
    reviews: 185,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    badge: "Best Seller",
    discount: "16% OFF",
  },
  {
    id: 11,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 2999,
    oldPrice: 3999,
    rating: 4.6,
    reviews: 230,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    badge: "Popular",
    discount: "25% OFF",
  },
  {
    id: 12,
    name: "Gaming Headset",
    category: "Audio",
    price: 3499,
    oldPrice: 4999,
    rating: 4.7,
    reviews: 165,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
    badge: "New Arrival",
    discount: "30% OFF",
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    category: "Audio",
    price: 1799,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
    badge: "Best Seller",
    discount: "28% OFF",
  },
  {
    id: 14,
    name: "DSLR Camera",
    category: "Cameras",
    price: 45999,
    oldPrice: 52999,
    rating: 4.8,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    badge: "Popular",
    discount: "13% OFF",
  },
  {
    id: 15,
    name: "Action Camera",
    category: "Cameras",
    price: 18999,
    oldPrice: 22999,
    rating: 4.6,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    badge: "New Arrival",
    discount: "17% OFF",
  },
  {
    id: 16,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 2299,
    oldPrice: 3299,
    rating: 4.4,
    reviews: 275,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    badge: "",
    discount: "30% OFF",
  },
  {
    id: 17,
    name: "Fitness Smart Band",
    category: "Wearables",
    price: 1499,
    oldPrice: 2199,
    rating: 4.3,
    reviews: 190,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
    badge: "Popular",
    discount: "32% OFF",
  },
  {
    id: 18,
    name: "Wireless Charging Pad",
    category: "Accessories",
    price: 999,
    oldPrice: 1499,
    rating: 4.2,
    reviews: 150,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/256177_0_gvqbs2.png",
    badge: "",
    discount: "33% OFF",
  },
  {
    id: 19,
    name: "LED Monitor",
    category: "Computers",
    price: 12999,
    oldPrice: 15999,
    rating: 4.7,
    reviews: 205,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    badge: "Best Seller",
    discount: "19% OFF",
  },
  {
    id: 20,
    name: "Gaming Controller",
    category: "Accessories",
    price: 2499,
    oldPrice: 3499,
    rating: 4.5,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500",
    badge: "",
    discount: "28% OFF",
  },
  {
    id: 21,
    name: "Power Bank",
    category: "Accessories",
    price: 1299,
    oldPrice: 1999,
    rating: 4.4,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    badge: "Popular",
    discount: "35% OFF",
  },
  {
    id: 22,
    name: "Smart Television",
    category: "Computers",
    price: 35999,
    oldPrice: 42999,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    badge: "Best Seller",
    discount: "16% OFF",
  },
  {
    id: 23,
    name: "VR Headset",
    category: "Accessories",
    price: 24999,
    oldPrice: 29999,
    rating: 4.6,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
    badge: "New Arrival",
    discount: "17% OFF",
  },
  {
    id: 24,
    name: "Smart Home Camera",
    category: "Cameras",
    price: 3999,
    oldPrice: 4999,
    rating: 4.3,
    reviews: 125,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500",
    badge: "",
    discount: "20% OFF",
  },
  {
    id: 25,
    name: "Wireless Gaming Mouse",
    category: "Accessories",
    price: 1599,
    oldPrice: 2299,
    rating: 4.5,
    reviews: 260,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    badge: "Popular",
    discount: "30% OFF",
  },
  {
    id: 26,
    name: "Smartphone Gimbal",
    category: "Mobiles",
    price: 6999,
    oldPrice: 8999,
    rating: 4.4,
    reviews: 75,
    image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=500",
    badge: "New Arrival",
    discount: "22% OFF",
  },
  {
    id: 27,
    name: "E-Reader",
    category: "Computers",
    price: 11999,
    oldPrice: 14999,
    rating: 4.6,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    badge: "",
    discount: "20% OFF",
  },
  {
    id: 28,
    name: "Mini Projector",
    category: "Computers",
    price: 8999,
    oldPrice: 11999,
    rating: 4.5,
    reviews: 105,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500",
    badge: "Popular",
    discount: "25% OFF",
  },
  {
    id: 29,
    name: "Smart Doorbell",
    category: "Accessories",
    price: 4999,
    oldPrice: 6499,
    rating: 4.3,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
    badge: "New Arrival",
    discount: "23% OFF",
  },
  {
    id: 30,
    name: "Drone Camera",
    category: "Cameras",
    price: 24999,
    oldPrice: 29999,
    rating: 4.7,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    badge: "New Arrival",
    discount: "17% OFF",
  },
  {
    id: 31,
    name: "Smart Projector",
    category: "Computers",
    price: 14999,
    oldPrice: 18999,
    rating: 4.6,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500",
    badge: "Popular",
    discount: "21% OFF",
  },
  {
    id: 32,
    name: "Wireless Microphone",
    category: "Audio",
    price: 2999,
    oldPrice: 3999,
    rating: 4.5,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500",
    badge: "Best Seller",
    discount: "25% OFF",
  },
];

const categories = [
  "All",
  "Audio",
  "Wearables",
  "Cameras",
  "Computers",
  "Accessories",
  "Mobiles",
];

const money = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const [cartItems, setCartItems] = useState(() =>
    readStorage("technest-cart", []),
  );

  const [wishlist, setWishlist] = useState(() =>
    readStorage("technest-wishlist", []),
  );

  const [theme, setTheme] = useState(() =>
    readStorage("technest-theme", "light"),
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [activeView, setActiveView] = useState("products");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // SAVE CART
  useEffect(() => {
    localStorage.setItem("technest-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // SAVE WISHLIST
  useEffect(() => {
    localStorage.setItem("technest-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // SAVE THEME
  useEffect(() => {
    localStorage.setItem("technest-theme", JSON.stringify(theme));
  }, [theme]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const wishlistCount = wishlist.length;

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // ADD PRODUCT TO CART
  function addToCart(product) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  // INCREASE QUANTITY
  function increaseQuantity(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  // DECREASE QUANTITY
  function decreaseQuantity(id) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // REMOVE PRODUCT
  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  // ADD OR REMOVE FROM WISHLIST
  function toggleWishlist(id) {
    setWishlist((items) =>
      items.includes(id)
        ? items.filter((itemId) => itemId !== id)
        : [...items, id],
    );
  }

  // SEARCH, FILTER AND SORT
  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id),
  );

  // PLACE ORDER
  function placeOrder(event) {
    event.preventDefault();

    if (cartItems.length === 0) return;

    setOrderPlaced(true);
    setCartItems([]);
    setWishlist([]);
    setCustomer({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setActiveView("confirmation");
  }

  return (
    <div className={`app ${theme}-mode`}>
      <nav className="navbar">
        <button className="logo" onClick={() => setActiveView("products")}>
          <span>✦</span> TechNest
        </button>

        <div className="nav-links">
          <button onClick={() => setActiveView("products")}>Home</button>

          <button onClick={() => setActiveView("products")}>Products</button>

          <button onClick={() => setActiveView("wishlist")}>
            ♡ Wishlist <span className="nav-count">{wishlistCount}</span>
          </button>

          <button onClick={() => setActiveView("cart")}>
            🛒 Cart <span className="nav-count">{cartCount}</span>
          </button>

          <button onClick={() => setActiveView("about")}>About</button>

          {/* LIGHT / DARK MODE BUTTON */}
          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setTheme((current) => (current === "light" ? "dark" : "light"))
            }
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "☾ Dark" : "☀ Light"}
          </button>
        </div>
      </nav>

      {/* HOME / PRODUCTS PAGE */}
      {activeView === "products" && (
        <>
          <section className="hero" id="home">
            <div className="hero-content">
              <p className="hero-tag">WELCOME TO TECHNEST</p>

              <h1>
                Technology that
                <br />
                makes life <span>better.</span>
              </h1>

              <p className="hero-description">
                Discover the latest gadgets and everyday technology at prices
                you'll love.
              </p>

              <button
                className="shop-button"
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Products →
              </button>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900"
                alt="Electronic gadgets"
              />
            </div>
          </section>

          {/* CATEGORIES */}
          <section className="category-section">
            <h2>Explore Categories</h2>

            <div className="category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "category-btn selected"
                      : "category-btn"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* PRODUCT LIST */}
          <section className="products-section" id="products">
            <div className="section-heading">
              <div>
                <p>HANDPICKED FOR YOU</p>
                <h2>Our Latest Products</h2>
              </div>

              <span>{filteredProducts.length} Products</span>
            </div>

            {/* SEARCH AND SORT */}
            <div className="shop-controls">
              <input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* PRODUCT CARDS */}
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  addToCart={() => addToCart(product)}
                  quantity={
                    cartItems.find((item) => item.id === product.id)
                      ?.quantity || 0
                  }
                  onIncrease={() => increaseQuantity(product.id)}
                  onDecrease={() => decreaseQuantity(product.id)}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={() => toggleWishlist(product.id)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="empty-message">
                No products found. Try another search.
              </p>
            )}
          </section>
        </>
      )}

      {/* WISHLIST PAGE */}
      {activeView === "wishlist" && (
        <section className="products-section page-view">
          <div className="section-heading">
            <div>
              <p>YOUR FAVOURITES</p>
              <h2>My Wishlist ♡</h2>
            </div>

            <span>{wishlistProducts.length} Items</span>
          </div>

          {wishlistProducts.length === 0 ? (
            <div className="empty-wishlist">
              <div className="empty-wishlist-icon">♡</div>

              <h2>Your wishlist is waiting for some love!</h2>

              <p>
                You haven't saved any products yet. Explore our collection and
                add your favourite gadgets here.
              </p>

              <button
                className="empty-wishlist-button"
                onClick={() => setActiveView("products")}
              >
                Discover Products <span>→</span>
              </button>

              <div className="empty-wishlist-note">
                ✨ Your favourite products, all in one place!
              </div>
            </div>
          ) : (
            <div className="product-grid">
              {wishlistProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  addToCart={() => addToCart(product)}
                  quantity={
                    cartItems.find((item) => item.id === product.id)
                      ?.quantity || 0
                  }
                  onIncrease={() => increaseQuantity(product.id)}
                  onDecrease={() => decreaseQuantity(product.id)}
                  isWishlisted={true}
                  onToggleWishlist={() => toggleWishlist(product.id)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* CART PAGE */}
      {activeView === "cart" && (
        <section className="cart-section page-view">
          <h2>My Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>

              <h2>Your cart is feeling lonely!</h2>

              <p>
                Your shopping cart is currently empty. Discover amazing gadgets
                and find something you love.
              </p>

              <button
                className="empty-cart-button"
                onClick={() => setActiveView("products")}
              >
                Explore Products <span>→</span>
              </button>

              <div className="empty-cart-suggestions">
                <span>✨</span> Great deals are waiting for you!
              </div>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-list">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-info">
                      <p className="product-category">{item.category}</p>
                      <h3>{item.name}</h3>
                      <strong>{money(item.price)}</strong>

                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <strong className="line-total">
                      {money(item.price * item.quantity)}
                    </strong>
                  </div>
                ))}
              </div>

              {/* CART SUMMARY */}
              <aside className="cart-summary">
                <h3>Order Summary</h3>

                <div className="summary-row">
                  <span>Items ({cartCount})</span>
                  <span>{money(cartTotal)}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="free-delivery">FREE</span>
                </div>

                <div className="summary-row total-row">
                  <strong>Total</strong>
                  <strong>{money(cartTotal)}</strong>
                </div>

                <button
                  className="checkout-button"
                  onClick={() => setActiveView("checkout")}
                >
                  Proceed to Checkout →
                </button>

                <button
                  className="clear-cart-button"
                  onClick={() => setCartItems([])}
                >
                  Clear Cart
                </button>
              </aside>
            </div>
          )}
        </section>
      )}

      {/* CHECKOUT PAGE */}
      {activeView === "checkout" && (
        <section className="checkout-section page-view">
          <div className="checkout-heading">
            <p>ALMOST THERE!</p>
            <h2>
              Complete Your Order <span>♡</span>
            </h2>
            <span>Just a few details before your gadgets reach you.</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-state">
              <p>Your cart is empty.</p>

              <button
                className="checkout-button"
                onClick={() => setActiveView("products")}
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="checkout-layout">
              <form className="checkout-form" onSubmit={placeOrder}>
                <div className="checkout-form-heading">
                  <span className="checkout-heading-icon">📦</span>
                  <div>
                    <h3>Delivery Information</h3>
                    <p>Where should we deliver your order?</p>
                  </div>
                </div>

                <label>Full Name</label>
                <input
                  required
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                />

                <label>Email Address</label>
                <input
                  required
                  type="email"
                  value={customer.email}
                  onChange={(e) =>
                    setCustomer({ ...customer, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />

                <label>Phone Number</label>
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                  placeholder="10-digit mobile number"
                />

                <label>Delivery Address</label>
                <textarea
                  required
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                  placeholder="Enter your complete address"
                  rows="4"
                />

                <button className="checkout-button" type="submit">
                  Place Order · {money(cartTotal)}
                </button>
              </form>

              {/* ORDER SUMMARY */}
              <aside className="cart-summary">
                <div className="order-summary-heading">
                  <span>🛍️</span>
                  <h3>Order Summary</h3>
                </div>

                {cartItems.map((item) => (
                  <div className="summary-row" key={item.id}>
                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <span>{money(item.price * item.quantity)}</span>
                  </div>
                ))}

                <div className="summary-row total-row">
                  <strong>Total</strong>
                  <strong>{money(cartTotal)}</strong>
                </div>

                <p className="payment-note">
                  Demo checkout: no real payment will be collected.
                </p>
              </aside>
            </div>
          )}
        </section>
      )}

      {/* ORDER CONFIRMATION */}
      {activeView === "confirmation" && orderPlaced && (
        <section className="confirmation-section page-view">
          <div className="confirmation-card">
            <div className="success-icon">✓</div>

            <h2>Order placed successfully!</h2>

            <p>
              Thank you, {customer.name || "Customer"}. Your demo order has been
              confirmed.
            </p>

            <button
              className="checkout-button"
              onClick={() => {
                setOrderPlaced(false);
                setActiveView("products");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {activeView === "about" && (
        <section className="about-section page-view">
          <h2>About TechNest</h2>

          <p>
            Your little corner of technology. Discover electronics, accessories
            and everyday gadgets in one place.
          </p>

          <button
            className="checkout-button"
            onClick={() => setActiveView("products")}
          >
            Explore Products
          </button>
        </section>
      )}

      {/* BOTTOM BANNER */}
      <section className="bottom-banner" id="about-banner">
        <h2>Good Gadgets. Better Experiences.</h2>
        <p>Find the technology you need to make every day smarter.</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>✦ TechNest</h2>
        <p>Your little corner of technology.</p>
        <p className="copyright">© 2026 TechNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
