import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";

function App() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const [products, setProducts] = useState([
    {key: 0, name: 'MSI GeForce RTX™ 4090 SUPRIM X 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAMSI44093__2.jpg?h=3224551954', category: 'Graphics Card', price: 3489},
    {key: 1, name: 'ASUS ROG Strix GeForce RTX™ 4090 OC 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAASU34091__1.jpg?h=1791928359', category: 'Graphics Card', price: 4398},
    {key: 2, name: 'Gigabyte GeForce RTX™ 4090 Gaming OC 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAGBV44092__1.jpg?h=4255028861', category: 'Graphics Card', price: 3399},
    {key: 3, name: 'PNY GeForce RTX™ 4090 XLR8 GAMING 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAPNY14093__1.jpg?h=4061000036', category: 'Graphics Card', price: 3298},
    {key: 4, name: 'ASUS TUF Gaming GeForce RTX™ 4090 OC 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAASU34090__1.jpg?h=2481440853', category: 'Graphics Card', price: 3898},
    {key: 5, name: 'Gigabyte AORUS GeForce RTX™ 4090 Master 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAGBV44095__1.jpg?h=1096883254', category: 'Graphics Card', price: 3999},
    {key: 6, name: 'MSI GeForce RTX™ 4090 SUPRIM LIQUID 24G', image: 'https://www.pbtech.co.nz/imgprod/V/G/VGAMSI44096__2.jpg?h=810178150', category: 'Graphics Card', price: 4098},
    {key: 7, name: 'ZOTAC GeForce RTX™ 4090 Trinity OC 24G', image: 'https://www.computerlounge.co.nz/data/media/images/catalogue/Products2/Components/Graphics%20Cards/ZOTAC/41351_5.jpg?maxheight=800&maxwidth=800&quality=85&404=default.jpg', category: 'Graphics Card', price: 3399},
    {key: 8, name: 'ZOTAC GeForce RTX™ 4090 AMP Extreme AIRO 24G', image: 'https://www.computerlounge.co.nz/data/media/images/catalogue/Products2/Components/Graphics%20Cards/ZOTAC/41350_5.jpg?maxheight=800&maxwidth=800&quality=85&404=default.jpg', category: 'Graphics Card', price: 3399}
  ]);

  const [cart, setCart] = useState([
  ]);

  const [cartTotal, setcartTotal] = useState(0);

  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.item.name === item.name);
    if (index === -1) {
      setCart([...cart, { quantity: 1, item }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity + 1};
      setCart(updatedCart);
    }
    setcartTotal(cartTotal + item.price);
    setCartQuantity(cartQuantity + 1);
  };

  const incrementItemQuantity = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.item.name === item.name);
    if (index === -1) {
      return;
    } else {
      const updatedCart = [...cart];
      updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity + 1};
      setCart(updatedCart);
    }
    setcartTotal(cartTotal + item.price);
    setCartQuantity(cartQuantity + 1);
  };

  const deincrementItemQuantity = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.item.name === item.name);
    if (index === -1) {
      return;
    } else {
      const updatedCart = [...cart];
      updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1};
      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
    setcartTotal(cartTotal - item.price);
    setCartQuantity(cartQuantity - 1);
  };

  const retrieveItemQuantity = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.item.name === item.name);
    if (index === -1) {
      return;
    } else {
      return cart[index].quantity;
    }
  };

  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <Home products={products} cart={cart} addToCart={addToCart} cartTotal={cartTotal} cartQuantity={cartQuantity} incrementItemQuantity={incrementItemQuantity} deincrementItemQuantity={deincrementItemQuantity} retrieveItemQuantity={retrieveItemQuantity} /> } />
        <Route path='/shop' element={ <Shop products={products} cart={cart} addToCart={addToCart} cartTotal={cartTotal} cartQuantity={cartQuantity} incrementItemQuantity={incrementItemQuantity} deincrementItemQuantity={deincrementItemQuantity} retrieveItemQuantity={retrieveItemQuantity} /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>
    </div>
  );
}

export default App;
