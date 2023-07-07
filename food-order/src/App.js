import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layouts/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
