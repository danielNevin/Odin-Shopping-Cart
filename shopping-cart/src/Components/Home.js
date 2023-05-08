import React from "react";
import { Link } from "react-router-dom";

function Home(props) {

  return(
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-100">
      <p className="w-3/4 py-8 font-bold text-4xl tracking-wide">
        The GeForce RTX 4090
      </p>
      <div className="flex flex-row items-center justify-center w-3/4 h-1/2 gap-8">
        <div className="h-full w-2/3 bg-hero-image bg-cover bg-center rounded-2xl shadow-2xl hover:scale-105 hover:brightness-125 transition-all">
        </div>
        <div className="flex flex-col justify-between h-full p-10 w-1/3 bg-white rounded-2xl shadow-2xl hover:scale-105 transition-all ">
          <div className="flex flex-col h-2/3 justify-between items">
            <p className="font-semibold text-lg">The NVIDIA® GeForce RTX™ 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create. It’s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.</p>
          </div>
          <div className="flex h-full items-center justify-center">
            <Link to={'/shop'}>
              <button className="p-4 bg-lime-500 text-lg font-semibold text-white rounded-xl hover:bg-lime-600">See All Buying Options</button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;