import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, cantidad) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.error(`El producto ya fue agregado`);
    }

    console.log(item);
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };
  const total = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  };

  const cartLenght = () => {
    return cart.reduce(
      (prevLenght, actLenght) => prevLenght + actLenght.cantidad,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        cartLenght,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
