import ItemCounter from "../ItemCount/ItemCounter";
import styles from "./ItemDetail.module.css";
export const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  price,
  stock,
}) => {
  return (
    <article className={styles.cardItem}>
      <section>
        <img src={image} alt={name} className={styles.productImg} />
        <h2>{name}</h2>
      </section>
      <section>
        <p>Categoria: {category} </p>
        <p>{description}</p>
        <p>
          Precio: ${price} | Stock: {stock}{" "}
        </p>
      </section>
      <footer>
        <ItemCounter
          initial={1}
          stock={stock}
          onAdd={(cantidad) => console.log(`Cantidad Agregada ${cantidad}`)}
        />
      </footer>
    </article>
  );
};
