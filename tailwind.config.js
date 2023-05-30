/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dribbble: "#EA4C89",
        instagram: "#E4405F",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
        "neon-pink": "#F637EC",
      },
      boxShadow: {
        "neon-pink": "0px 0px 15px #F637EC",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
