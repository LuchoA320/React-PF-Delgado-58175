import { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";
import { getProducts } from "../../../routes/asyncmock";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.greeting}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
