import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
export const Cart = () => {
  const { cart, clearCart, cartLenght, total, removeItem } =
    useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const getTotal = () => {
    let total = 0;
    cart.forEach((p) => (total += p.cantidad * p.price));
    setCartTotal(total);
  };

  useEffect(() => {
    getTotal();
  }, [cart]);
  if (cart.length === 0) {
    return (
      <div className={styles.divEmpty}>
        <h1>¡Tu carrito esta vacio!</h1>
        <button>
          <Link to={"/"}>Productos</Link>
        </button>
      </div>
    );
  }
  return (
    <div className={styles.cartCard}>
      {cart.map((p) => (
        <div className={styles.cartItem} key={p.id}>
          <img className={styles.productImg} src={p.image} alt={p.name} />
          <div className={styles.itemInfo}>
            <h2>{p.name}</h2>
            <p>
              Cantidad: {p.cantidad} | Categoria: {p.category}
            </p>
            <h3>Subtotal ${p.price * p.cantidad} </h3>
          </div>
          <button onClick={() => removeItem(p.id, p.item)}>
            <i class="bx bxs-trash"></i>
          </button>
        </div>
      ))}
      <h3>Total: ${cartTotal} </h3>
      <button className={styles.button} onClick={() => clearCart()}>
        Limpiar carrito
      </button>
    </div>
  );
};
