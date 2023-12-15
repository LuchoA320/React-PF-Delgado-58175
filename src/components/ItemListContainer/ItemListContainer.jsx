import { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  addDoc,
  updateDoc,
} from "firebase/firestore";
export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");

    getDocs(productsRef)
      .then((products) => {
        setProducts(
          products.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            price: doc.data().price.toLocaleString(),
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className={styles.main}>
      <h1 className={styles.greeting}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
