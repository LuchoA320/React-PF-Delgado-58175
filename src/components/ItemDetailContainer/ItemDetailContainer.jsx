import { getProductById } from "../../../routes/asyncmock";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(`2`)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
