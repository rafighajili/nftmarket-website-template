/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },

    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    container: {
      screens: {
        xs: "90vw",
        sm: "475px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
      },
      center: true,
    },

    extend: {
      colors: {
        primary: "#5C43F6",
        secondary: "#BC61F3",
        forItem: "rgba(134, 155, 223, 0.14)",
        forHoveredItem: "rgba(134, 155, 223, 0.32)",
        forStroke: "rgba(83, 84, 136, 0.4)",
        dark: "#04040C",
        light: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
