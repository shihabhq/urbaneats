import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        btncol: "#bf9444",
      },
    },

    screens: {
      mobile: "480px",
      sm: "640px",
      md: "768px",
      lg: "1060px",
      xl: "1280px",
      tablet: "920px",
      xsm: "380px",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "night"],
  },
};
