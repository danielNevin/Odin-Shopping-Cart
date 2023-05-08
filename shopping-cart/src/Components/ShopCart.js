import React from "react";
import ShopCartCard from "./ShopCartCard";
import { Link } from "react-router-dom";

function ShopCart(props) {
  const cartCards = props.cart.map((product, index) => {
    return <ShopCartCard quantity={product.quantity} item={product.item}/>
  })

  const isCartEmpty = (data) => {
    if ( data === 0 ) {
      return true;
    } else {
      return false
    }
  }

  return (
    <div className="top-16 left-1/2 transform -translate-x-1/2 absolute h-auto max-h-96 w-full min-w-fit z-10 bg-white bg-opacity-100 rounded-2xl overflow-x-hidden p-4 shadow-2xl">
      <div className="flex flex-col w-full h-full gap-8">
        {isCartEmpty(props.cart.length) ? (
          <p className="flex flex-row text-m w-36 justify-center items-center font-bold">Your Cart is Empty</p>
        ) : (     
          <div className="flex  flex-col items-center justify-center gap-4">
            {cartCards}
            <Link to={'/checkout'}>
              <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-2xl h-12">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShopCart;