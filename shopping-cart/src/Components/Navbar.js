import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Museum from '../Resources/Icons/Museum.png'
import Bag from '../Resources/Icons/Bag.png'
import ShopCart from "./ShopCart";

function Navbar(props) {
  const isCartQuantityZero = (q) => {
    if (q == 0) {
      return false;
    } else {
      return true;
    }
  }

  const [isVisibleCart, setIsVisibleCart] = useState(false);

  function handleCartClick() {
    setIsVisibleCart(!isVisibleCart);
  }

  return (
    <nav className="flex bg-white border-gray-200 h-16 items-center justify-center">
      <div className="flex justify-between items-center w-2/3">
        <div className="flex flex-wrap items-center gap-12 p-4">
          <Link to={'/'}>
            <div className="flex">
              <img src={Museum} className="h-8 mr-3 text-black" alt="Merchant Logo" />
              <span className="text-2xl font-semibold whitespace-nowrap">Fake Merchant</span>
            </div>
          </Link>
          <div className="hidden w-full md:block md:w-auto h-auto" id="navbar-default">
            <Link to={'/shop'}>
              <span className="text-lime-500 bg-white hover:text-lime-600 text-xl">Shop</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center relative">
          <div className="flex flex-row items-center py-1 px-4 rounded-xl hover:scale-125 shadow-xl transition-all gap-4 cursor-pointer justify-center" onClick={handleCartClick} >
            <img src={Bag} className="h-8 transition-all" alt="Your Cart"/>
            {isCartQuantityZero(props.cartQuantity) && (
              <p className="font-semibold transition-all">${props.cartTotal}.00</p>
            )}
            <div className="flex text-white bg-lime-500 px-2 rounded-lg justify-center items-center font-semibold">{props.cartQuantity}</div>
          </div>
          {isVisibleCart && (
            <ShopCart cart={props.cart} cartQuantity={props.cartQuantity}/>
          )}  
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
