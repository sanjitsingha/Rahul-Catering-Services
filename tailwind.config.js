/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mig: ["Migontama", "sans"],
        nats: ["NATS", "sans"],
      },
      colors: {
        primary:["#06502B"],
        secondary:["#0B9C54"]
      },
    },
  },
  plugins: [],
};
