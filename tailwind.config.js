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
    themes: [
      {
        light: {
          primary: "#FF5722",
          secondary: "#FF9800",
          accent: "#8BC34A",
          neutral: "#5D4037",
          "base-100": "#FAF9F6",
        },
        night: {
          primary: "#FF6F61",
          secondary: "#F9A825",
          accent: "#4CAF50",
          neutral: "#2C2C2C",
          "base-100": "#1B1B1B",
        },
      },
    ],
  },
};
