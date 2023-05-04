import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return(
    <div className="flex flex-col w-full h-screen shadow-xl-inset items-center bg-hero-image">
      <div className="flex h-full flex-col items-center w-1/2 gap-32 px-16 py-32">
        <div className="flex flex-col gap-32">
          <div className="flex shadow-2xl">
            <div className="flex flex-col w-1/2 h-full bg-slate-200 border-r-4 border-black py-16 px-8 font-bold text-xl text-center justify-between">
              <p>Are you interested in buying expensive goods that you really do not need?</p>
              <p>Do you take pleasure from the act of keying your card details into a payment page?</p>
            </div>
          </div>
          <div className="flex shadow-2xl p-8  bg-slate-200 font-bold text-xl border-r-4 border-black justify-center">
            If the answer to either of these questions is YES! press the button below
          </div>
        </div>
        <Link to={'/shop'}>
          <button className="flex shadow-2xl border-l-4 border-r-4 bg-slate-200  border-black py-8 px-16 font-bold text-xl hover:animate-shop-pulse bg-white items-center rounded-2xl" >
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
    
  )
}

export default Home;