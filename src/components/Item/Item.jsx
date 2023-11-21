import styles from "./Item.module.css";

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
        <p>${price}</p>
        <p>Stock: {stock}</p>
      </section>
      <footer>
        <button>Ver Detalles</button>
      </footer>
    </article>
  );
};
