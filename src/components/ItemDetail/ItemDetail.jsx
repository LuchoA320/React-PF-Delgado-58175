import ItemCounter from "../ItemCount/ItemCounter";
import styles from "./ItemDetail.module.css";
export const ItemDetail = ({
  id,
  name,
  brand,
  image,
  category,
  description,
  price,
  stock,
}) => {
  return (
    <article className={styles.cardItem}>
      <section className={styles.cardTop}>
        <img src={image} alt={name} className={styles.productImg} />
        <div>
          <h2>{name}</h2>
          <p>
            Marca: {brand} | Categoria: {category} | Stock: {stock}
          </p>
          <hr />
          <h2 className={styles.priceTag}>${price}</h2>
          <hr />
          <ItemCounter
            initial={1}
            stock={stock}
            onAdd={(cantidad) => console.log(`Cantidad Agregada ${cantidad}`)}
          />
        </div>
      </section>
      <section>
        <p> </p>
        <p>{description}</p>
      </section>
      <footer></footer>
    </article>
  );
};
