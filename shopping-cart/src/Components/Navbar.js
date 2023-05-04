import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Museum from '../Resources/Icons/Museum.png'
import Bag from '../Resources/Icons/Bag.png'
import Cart from "./Cart";

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
              <span className="text-green-600 bg-white hover:text-green-800 text-xl">Shop</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center relative">
          <div className="flex flex-row items-center py-1 px-4 rounded-xl hover:scale-125 shadow-xl transition-all gap-4 cursor-pointer " onClick={handleCartClick} >
            <img src={Bag} className="h-8 transition-all" alt="Your Cart"/>
            {isCartQuantityZero(props.cartQuantity) && (
              <p className="font-semibold transition-all">${props.cartTotal}.00</p>
            )}
            <div className="flex text-white bg-green-600 px-2 rounded-lg justify-center items-center font-semibold">{props.cartQuantity}</div>
          </div>
          {isVisibleCart && (
            <Cart cart={props.cart}/>
          )}  
        </div>
      </div>
    </nav>


/*     <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <ul className="navbar-nav mr flex flex-row justify-left w-1/4 h-full items-center p-4 gap-4">
        <li><Link to={'/'} className="nav-link text-white py-3 px-8 flex justify-center align-middle rounded-xl bg-slate-400 hover:brightness-125">Home</Link></li>
        <li><Link to={'/shop'} className="nav-link text-white py-3 px-8 flex justify-center align-middle rounded-xl bg-slate-400 hover:brightness-125">Shop</Link></li>
      </ul>
      <form class="flex items-center w-1/3">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required/>
        </div>
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-gray-300 rounded-lg border border-gray-300 hover:brightness-125">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
      <div className="navbar-nav flex flex-row w-1/4 h-full items-center p-4 gap-4 justify-end">
      </div>
    </nav> */
  );
}

export default Navbar;
