import React, { useState, useEffect } from "react";

function ProductCard(props) {

  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.retrieveItemQuantity(props.item));
  }, [props]);

  const handleAddToCartClick = (item) => {
    setIsClicked(true);
    props.addToCart(item);
  };

  useEffect(() => {
    if (((quantity < 1) && (isClicked)) || ((props.cart.findIndex((cartItem) => cartItem.item.name === props.item.name))) === -1) {
      setIsClicked(false);
    }
  }, [quantity]);

  return (
    <div className="flex flex-col h-96 w-96 shadow-2xl justify-center items-center py-10 gap-2 rounded-2xl border-2 border-white bg-white hover:scale-105 hover:border-lime-400 transition-all">
      <p className="font-semibold text-sm">{props.item.name}</p>
      <img className="px-16" src={props.item.image} alt={props.item.name}/>
      <p className="font-bold">${props.item.price}.00</p>
      { isClicked ? (
        <div className="flex flex-row gap-2 h-12 py-2 px-4">
          <button className="text-white w-6 bg-lime-500 hover:bg-line-700 transition-all rounded-md justify-center items-center font-bold" onClick={() => props.incrementItemQuantity(props.item)}>+</button>
          <p className="w-10 text-center bg-slate-100 rounded-md shadow-inner">{quantity}</p>
          <button className="text-white w-6 bg-red-400 hover:bg-red-600 transition-all rounded-md justify-center items-center font-bold" onClick={() => props.deincrementItemQuantity(props.item)}>-</button>
        </div>
      ) : (
        <button className="bg-lime-500 hover:bg-lime-600 transition-all text-white font-bold py-2 px-4 rounded-2xl h-12" onClick={() => handleAddToCartClick(props.item) }>ADD TO CART</button>
      )}
    </div>
  )
}

export default ProductCard;