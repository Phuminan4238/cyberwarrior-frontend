/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px", // <<<< customize your 2xl screen breakpoint here
    },
    extend: {
      fontFamily: {
        sans: ["Gabarito", "sans-serif"],
        thai: ["IBM Plex Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
