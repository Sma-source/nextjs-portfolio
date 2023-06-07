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
        javascript: "#FFCA28",
        react: "#00D8FF",
        nodejs: "#539E43",
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
