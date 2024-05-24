/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
      spaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#EBEBEB",
        secondary: "#D9D9D9",
        dark: "#1B1C1F",
      },
    },
  },
  plugins: [require("daisyui")],
};
