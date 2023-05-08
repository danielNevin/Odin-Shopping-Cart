import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

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
      <div className="relative flex flex-col w-full shadow-xl-inset items-center bg-slate-50 h-screen">
        <p className="py-4 px-8 m-8 text-2xl font-semibold shadow-2xl rounded-2xl">NVIDIA GeForce RTX™ 4090</p>
        <div className="flex flex-wrap gap-8 w-3/4 h-auto pb-8 justify-center">
          {productCards}
        </div>
      </div>
    </div>
  )
}

export default Shop;