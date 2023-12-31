/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#343a40",
        dark: "#495057",
        medium: "#ced4da",
        light: "#f1f3f5",
        cyan: "#1098ad",
        orange: "#ffa94d",
      },
      screens: {},
      fontFamily: {
        primary: "vazir",
        secondary: "shabnam",
      },
    },
  },
  plugins: [],
};
