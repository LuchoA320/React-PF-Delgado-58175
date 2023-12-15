import React from "react";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
  const { cartLenght } = useContext(CartContext);
  return (
    <div className={styles.divCart}>
      <Link to={"/cart"}>
        <i className="bx bx-cart"></i>
      </Link>
      <p>{cartLenght()}</p>
    </div>
  );
};

export default CartWidget;
