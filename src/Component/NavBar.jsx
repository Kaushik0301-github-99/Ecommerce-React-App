// ecommerce product addProduct

import React from "react";
import navbar from "../Css/Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.links}>
        <ul>
          <li>
            <Link to="/">ecommorce</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/addproduct">Add a Product</Link>
          </li>
        </ul>
      </div>
      <div className={navbar.profile}></div>
    </div>
  );
}

export default NavBar;
