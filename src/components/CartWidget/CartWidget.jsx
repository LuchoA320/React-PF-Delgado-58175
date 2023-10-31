import React from "react";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.divCart}>
      <i className="bx bx-cart"></i>
      <p>0</p>
    </div>
  );
};

export default CartWidget;
