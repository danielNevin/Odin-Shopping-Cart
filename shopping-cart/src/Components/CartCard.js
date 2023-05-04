import React from "react";

function CartCard(props) {

  return (
    <div className="grid grid-cols-5 w-96 gap-2 p-4 overflow-clip justify-center h-24 border-b-4 rounded-xl bg-white items-center">
      <p className="font-semibold col-start-1 col-end-2 text-sm text-gray-400">Qty: {props.quantity}</p>
      <img className="col-start-2 col-end-3" src={props.item.image} alt={props.item.name}/>
      <p className="col-start-3 col-end-5 text-sm">{props.item.name}</p>
      <p className="font-semibold col-start-5 col-end-6 text-sm">${props.item.price * props.quantity}.00</p>
    </div>
  )
}

export default CartCard;