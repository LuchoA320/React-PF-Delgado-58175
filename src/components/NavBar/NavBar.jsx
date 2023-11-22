import React from "react";
import styles from "./NavBar.module.css";
import viteLogo from "/vite.svg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.logo}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h4>Vite E-Shop</h4>
        </Link>

        <ul>
          <NavLink to={`/category/Celulares`}>Celulares</NavLink>
          <NavLink to={`/category/Televisores`}>Televisores</NavLink>
          <NavLink to={`/category/Notebooks`}>Notebooks</NavLink>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};
export default NavBar;
