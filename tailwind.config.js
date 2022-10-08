module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-thai": ["Noto Sans Thai", "sans-serif"],
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
