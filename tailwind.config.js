/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        salmonDark: "#FF7594",
        salmonLight: "#FF7C65",
        brown: "#2E1619",
        grayLight: "#D1D5DB",
        grayDark: "#A6A6A6",
        greenLight: "#98FFC1",
        yellowLight: "#FFF598",
        blueLight: "#98C7FF",
      },
      boxShadow: {
        sm: "0px 2px 5px 0px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
