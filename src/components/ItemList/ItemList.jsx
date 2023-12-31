import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";
export const ItemList = ({ products }) => {
  return (
    <div className={styles.itemList}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
