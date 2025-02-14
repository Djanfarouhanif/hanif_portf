/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        pa: ["simple"],
      },
      width: {
        screen: "600px",
        projet: "700px",
      },
      boxShadow: {
        custom: "-2px 2px 2px rgba(0,0,0,0.9), 2px -2px 5px rgba(0,0,0,0.9)",
        shad: "0px 0px 5px inset"
      },
      transformOrigin: {
        "3d": "50% 50%",
      },
      screens: {
        msc: { max: "600px" },
        contact: { max: "900px" },
      },
      animation: {
        wiggle: "wiggle 10s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
          // '100%': {transform: 'translateX(0%)'}
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".rotateY-45": {
          transform: "rotateY(55deg)",
        },
        ".perspective-3d": {
          perspective: "1000px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
