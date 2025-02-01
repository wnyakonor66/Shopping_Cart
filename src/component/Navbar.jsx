import "../assets/styles/navbar.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            </li>
            <li>
              <Link to="/cart" className="links">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
