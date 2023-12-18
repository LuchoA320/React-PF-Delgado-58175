import { useContext, useState } from "react";
import { db } from "../../firebase/client";
import { addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { CheckoutForm } from "./CheckoutForm";
import styles from "./Checkout.module.css";
import cartStyles from "../Cart/Cart.module.css";
export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart, cartTotal } = useContext(CartContext);

  const createOrder = async ({ name, lastname, phone, email, address }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          lastname,
          phone,
          email,
          address,
        },
        items: cart,
        total: total(),
        // date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, "ordenes");
      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.divOrder}>
        <div className={styles.generating}>
          <h1>Su orden se esta generando.</h1>
          <h3>Aguarde un momento.</h3>
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className={styles.divOrder}>
        <div className={styles.generating}>
          <h1>¡Orden Realizada con exito!</h1>
          <h3>Gracias por confiar en nosotros.</h3>
          <h2>Su id de orden es: {orderId} </h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CheckoutForm onConfirm={createOrder} />
      <div className={styles.divOrder}>
        {cart.map((p) => {
          return (
            <div className={cartStyles.cartItem} key={p.id}>
              <img
                className={cartStyles.productImg}
                src={p.image}
                alt={p.name}
              />
              <div className={cartStyles.itemInfo}>
                <h2>{p.name}</h2>
                <p>
                  Cantidad: {p.cantidad} | Categoria: {p.category}
                </p>
                <h3>Total U$D {p.price * p.cantidad} </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
