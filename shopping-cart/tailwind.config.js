/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg')",
      },
      boxShadow: {
        'xl-inset': 'inset 0px 4px 8px 0 rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        'shop-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        'slideInFromTop': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' }
        }
      },
      animation: {
        'shop-pulse': 'shop-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slideInFromTop': 'slideInFromTop 1s ease-in-out'
      },
    },
  },
  plugins: [],
}

