import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Cart from "./Cart";

function Shop(props) {
  useEffect(() => {
    document.title = 'Catalog';
  }, []);

  

  const productCards = (props.products).map((item, index) => {
    return <ProductCard key={index} item={item} cart={props.cart} addToCart={props.addToCart} incrementItemQuantity={props.incrementItemQuantity} deincrementItemQuantity={props.deincrementItemQuantity} retrieveItemQuantity={props.retrieveItemQuantity}/>
  })

  return(
    <div>
      <Navbar cart={props.cart} cartTotal={props.cartTotal} cartQuantity={props.cartQuantity}/>
      <div className="relative flex flex-col w-full shadow-xl-inset items-center bg-slate-100 h-full">
        <p className="py-4 px-8 m-8 text-2xl font-semibold shadow-2xl rounded-2xl bg-white">RTX 4090</p>
        <div className="flex flex-wrap gap-8 w-3/4 h-auto pb-8 justify-center">
          {productCards}
        </div>
      </div>
    </div>
    
    
  )
}

export default Shop;