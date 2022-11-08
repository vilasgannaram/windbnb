/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "720px",
        lg: "1024px",
        xl: "1440px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // orange
        orange: "#EB5757",
        orange1: "#EB575772",

        // white
        white1: "#F2F2F2",

        // gray
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
