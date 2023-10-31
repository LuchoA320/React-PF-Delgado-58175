import React from "react";
import styles from "./ItemListContainer.module.css";

export const ItemListContainer = (props) => {
  const { titulo, precio } = props;
  return (
    <div className={styles.cardProducto}>
      <img src="#" alt="" />
      <h2> {titulo} </h2>
      <h3> U$D {precio} </h3>
      <button>Agregar al Carrito</button>
    </div>
  );
};
