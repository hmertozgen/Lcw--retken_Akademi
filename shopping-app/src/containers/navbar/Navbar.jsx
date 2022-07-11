import React from "react";
import { Link } from "react-router-dom";
import { NavBarStyle } from "../../styles/ProductScreen";

const Navbar = () => {
  return (
    <>
      <NavBarStyle>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </ul>
      </NavBarStyle>
    </>
  );
};
export default Navbar;
