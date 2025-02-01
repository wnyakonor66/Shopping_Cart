import { useEffect, useState } from "react";
import "../assets/styles/shop.css";
import Navbar from "./Navbar";
import cart from "../assets/img/cart.png";

const Shop = ({ delay }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [quantities, setQuantities] = useState({}); // Track quantities per product

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
          if (!response.ok) throw new Error("Server error");
          return response.json();
        })
        .then((data) => {
          setProducts(data);
          // Initialize quantity for each product as 1
          const initialQuantities = {};
          data.forEach((product) => (initialQuantities[product.id] = 1));
          setQuantities(initialQuantities);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, delay);
  }, [delay]);

  // Handle quantity change
  const handleQuantityChange = (id, value) => {
    if (value < 1) value = 1; // Ensure min value is 1
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  // Increment quantity
  const incrementQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Decrement quantity (ensure it doesn't go below 1)
  const decrementQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  };

  // Add to cart (update count based on selected quantity)
  const addToCart = (id) => {
    setCartCount((prevCount) => prevCount + quantities[id]);
  };

  return (
    <div>
      <Navbar totalProducts={products.length} cartCount={cartCount} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products.length > 0 && (
        <div className="Shop_container">
          <h1>Get The Best Deals Here At Affordable Prices</h1>
          <div className="product_grid">
            {products.map((product) => (
              <div key={product.id} className="product_items">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: "100px", width: "100px" }}
                />
                <h3>{product.title}</h3>
                <p className="price_tag">${product.price}</p>

                {/* Quantity Controls */}
                <div className="quantityContainer">
                  <button
                    type="button"
                    className="quantityBtn"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    className="quantityInput"
                    value={quantities[product.id]}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.id,
                        parseInt(e.target.value, 10) || 1
                      )
                    }
                  />
                  <button
                    type="button"
                    className="quantityBtn"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                </div>

                {/* Add to Cart */}
                <div className="btnCartContainer">
                  <button
                    className="cartButton"
                    onClick={() => addToCart(product.id)}
                  >
                    <img src={cart} alt="Cart Icon" className="cartIcon" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
