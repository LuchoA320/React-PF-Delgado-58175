import React from "react";
import styles from "./NavBar.module.css";
import viteLogo from "/vite.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h4>Vite E-Shop</h4>
        </div>

        <ul>
          <li onClick={link()}>
            <a href="#">Home</a>
          </li>
          <li onClick={link()}>
            <a href="#">Products</a>
          </li>
          <li onClick={link()}>
            <a href="#">Account</a>
          </li>
          <li onClick={link()}>
            <a href="#">About</a>
          </li>
          <li onClick={link()}>
            <a href="#">Contact</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};
function link() {
  console.log("Tocaste un Link");
}
export default NavBar;
