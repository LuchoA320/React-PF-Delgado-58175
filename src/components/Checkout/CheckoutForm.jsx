import { useState } from "react";
import styles from "./Checkout.module.css";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      lastname,
      phone,
      email,
      address,
    };

    onConfirm(userData);
  };

  return (
    <div className={styles.formContainer}>
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleConfirm} className={styles.form}>
        <section className={styles.inputSection}>
          <label className={styles.formLabel}>
            Nombre
            <input
              className={styles.formInput}
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
              placeholder="John"
            />
          </label>
          <label className={styles.formLabel}>
            Apellido
            <input
              className={styles.formInput}
              type="text"
              value={lastname}
              onChange={({ target }) => setLastname(target.value)}
              required
              placeholder="Doe"
            />
          </label>
          <label className={styles.formLabel}>
            Telefono
            <input
              className={styles.formInput}
              type="number"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              required
              placeholder="12345678910"
            />
          </label>
          <label className={styles.formLabel}>
            Correo Electronico
            <input
              className={styles.formInput}
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
              placeholder="johndoe123@notmail.com"
            />
          </label>
          <label className={styles.formLabel}>
            Direccion
            <input
              className={styles.formInput}
              type=""
              value={address}
              onChange={({ target }) => setAddress(target.value)}
              required
              placeholder="742 Evergreen Terrace, Springfield, OR"
            />
          </label>
        </section>
        <div>
          <button type="submit" className={styles.submitButton}>
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};
