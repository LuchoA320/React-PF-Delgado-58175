import { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";
import { getProducts, getProductByCategory } from "../../../routes/asyncmock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className={styles.main}>
      <h1 className={styles.greeting}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
