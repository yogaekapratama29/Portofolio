// tailwind.config.js
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{ transform:"translateX(0)" },
          to:{ transform:"translateX(-100%)" }
        }
      },
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary:"#64748b",
      },
      animation: {
        'typewriter': 'typewriter 4s steps(40) forwards',
        'caret': 'caret 1s steps(1) infinite'
      },
      keyframes: {
        'typewriter': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'caret': {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
