/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#000",
        },
        light: {
          background: "#fff",
        },
      },
    },
  },
  plugins: [],
};
