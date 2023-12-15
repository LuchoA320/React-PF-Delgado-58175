import ItemCounter from "../ItemCount/ItemCounter";
import styles from "./ItemDetail.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
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
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (cantidad) => {
    setQuantityAdded(cantidad);

    const item = {
      id,
      name,
      price,
      image,
      category,
    };
    addItem(item, cantidad);
  };

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
          {quantityAdded > 0 ? (
            <div>
              <Link to={`/cart`} className={styles.button}>
                Ir al carrito
              </Link>
            </div>
          ) : (
            <ItemCounter initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
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
