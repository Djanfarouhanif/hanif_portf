/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width:{
        "screen":"600px",
        "projet": "700px",
      },
      boxShadow:{
        "custom": '-10px 10px 15px rgba(0,0,0,0.2), 10px -10px 20px rgba(0,0,0,0.4)',
      },
      transformOrigin:{
        '3d': '50% 50%',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.rotateY-45': {
          transform: 'rotateY(55deg)',
        }
      }
      addUtilities(newUtilities)
    }
    
  ], 
}