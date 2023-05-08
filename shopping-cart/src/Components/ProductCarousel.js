import React from "react";

function ProductCarousel(props) {
  const productCards = (props.products).map((item, index) => {
    return (
      <div className="flex flex-col h-96 w-96 shadow-2xl justify-center items-center py-10 gap-2 rounded-2xl border-2 border-purple-100 bg-white hover:scale-105 hover:border-purple-400 transition-all">
      <p className="font-semibold text-sm">{item.name}</p>
      <img className="px-16" src={item.image} alt={item.name}/>
      <p className="font-bold">${item.price}.00</p>
    </div>
    )
  })

  return ( 
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://www.pbtech.co.nz/imgprod/V/G/VGAMSI44093__2.jpg?h=3224551954"/>
            </div>
            {/* Item 2 */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              {productCards[1]}
            </div>
            {/* Item 3 */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              {productCards[2]}
            </div>
            {/* Item 4 */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              {productCards[3]}
            </div>
            {/* Item 5 */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              {productCards[4]}
            </div>
        </div>
        {/* <Slider indicators */}
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        {/* Slider controls */}
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
  )
}

export default ProductCarousel;