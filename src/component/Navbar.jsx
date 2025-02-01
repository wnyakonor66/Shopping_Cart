import "../assets/styles/navbar.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ totalProducts, cartCount }) => {
  return (
    <div className="navContainer">
      <div className="innerContainer">
        <div className="leftInner">
          <img src={logo} alt="logo" />
          <h1>Mainee</h1>
        </div>
        <div className="rightInner">
          <ul>
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="links">
                Shop
              </Link>
              {totalProducts > 0 && (
                <span className="shopBadge">{totalProducts}</span>
              )}
            </li>
            <li>
              <Link to="/cart" className="links">
                Cart
              </Link>
              {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
