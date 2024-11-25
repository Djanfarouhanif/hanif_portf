/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins' , 'sans-serif'],
      },
      width:{
        "screen":"600px",
        "projet": "700px",
      },
      boxShadow:{
        "custom": '-10px 10px 15px rgba(0,0,0,0.2), 10px -10px 20px rgba(0,0,0,0.4)',
      },
      transformOrigin:{
        '3d': '50% 50%',
      },
      screens: {
        'msc': {'max':'600px'},
        'contact': {'max': '800px'}
      },
      animation : {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle : {
          '0%': {transform : 'translateX(100%)'},
          '100%': { transform: 'translateX(-100%)'}
        }
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.rotateY-45': {
          transform: 'rotateY(55deg)',
        },
        '.perspective-3d':{
          perspective: '1000px'
        }
      }
      addUtilities(newUtilities)
    }
    
  ], 
}