import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

function Checkout(props) {
  useEffect(() => {
    document.title = 'Checkout';
  }, []);

  return(
    <div>
      <Navbar cart={props.cart} cartTotal={props.cartTotal} cartQuantity={props.cartQuantity}/>
      <div className="relative flex flex-col w-full shadow-xl-inset items-center justify-center bg-slate-100 h-screen">
          <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-2xl shadow-2xl bg-white">
            <p className="font-bold text-xl">THIS PAGE IS STILL UNDER CONSTRUCTION</p>
            <img src="https://constructionblog.autodesk.com/wp-content/uploads/2021/08/Blog-Hero-1060x596.jpg" alt="Construction"/>
          </div>
      </div>
    </div>
  )
}

export default Checkout;