import { useState } from "react";
import styles from "./ItemCounter.module.css";

export default function ItemCounter({ initial, stock, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className={styles.counter}>
      <div className={styles.controlesCounter}>
        <button onClick={sumar}>+</button>
        <h2>{cantidad}</h2>
        <button onClick={restar}>-</button>
      </div>
      <div>
        <button onClick={() => onAdd(cantidad)} disabled={!stock}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
