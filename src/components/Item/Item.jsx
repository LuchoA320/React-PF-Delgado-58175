import styles from "./Item.module.css";
import { Link } from "react-router-dom";
export const Item = ({ id, name, image, price, stock }) => {
  return (
    <article className={styles.productCard}>
      <picture>
        <img src={image} alt={name} className={styles.productImg} />
      </picture>
      <section>
        <h2>{name}</h2>
      </section>
      <section>
        <h3>U$D {price}</h3>
        <p>Stock: {stock}</p>
      </section>
      <footer className={styles.itemFooter}>
        <Link to={`/item/${id}`}>Ver Detalles</Link>
      </footer>
    </article>
  );
};
