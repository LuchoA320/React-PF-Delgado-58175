import React from "react";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <div className={styles.divCart}>
      <Link to={"/cart"}>
        <i className="bx bx-cart"></i>
      </Link>

      <p>0</p>
    </div>
  );
};

export default CartWidget;
