import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client.js";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    const productRef = doc(db, "productos", itemId);

    getDoc(productRef).then((producto) => {
      const productData = producto.data();
      const formattedProductData = {
        ...productData,
        price: productData.price,
      };
      setProduct({
        id: producto.id,
        ...formattedProductData,
      });
    });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
