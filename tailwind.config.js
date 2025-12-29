/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B38B59",
        "primary-dark": "#9A764A",
        secondary: "#1A1A1A",
        accent: "#E8B4A8",
        neutral: "#F5F5F5",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
