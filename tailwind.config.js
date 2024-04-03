/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "local-blue": "#6574FF",
        "local-blue-gradient-st": "#6574FF",
        "local-blue-gradient-ed": "#959FFF",
        "local-red": "#E75266",
        "local-red-gradient-st": "#E75266",
        "local-red-gradient-ed": "#EC8492",
        "local-white": "#FFFFFF",
        "local-bright-gray": "#F2F2F5",
        "local-dark-gray": "#797979",
        "local-gray": "#CECFD1",
        "local-black": "#000320",
      },  
    },
  },
  plugins: [],
}

