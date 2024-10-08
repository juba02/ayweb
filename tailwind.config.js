/** @type {import('tailwindcss').Config} */

import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : "class",
  theme: {
    extend: {
      fontFamily : {
        Poppins : ["Poppins", "sans-serif"],/* à modifier */
      },
      colors : {
        blueLogo:"#18DBD4",
        lightColor : "#F7FFFF",
        darkColor : "#0F0F30",
      },
      container: {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "3rem",
        },
      },
    },
  },
  plugins: [],
}

export default keepTheme(config);