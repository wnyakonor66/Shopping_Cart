import { useEffect, useState } from "react";
import "../assets/styles/shop.css";
import Navbar from "./Navbar";
import cart from "../assets/img/cart.png";
const Shop = ({ delay }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Server error");
          }
          return response.json();
        })
        .then((data) => setProduct(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, delay);
  }, [delay]);

  return (
    <div>
      <Navbar totalProducts={products.length} />
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
                <div className="btnCartContainer">
                  <button className="cartButton">
                    <img src={cart} alt="Cart Icon" className="cartIcon" />
                    Add to cart
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
