/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#6047EC",
        bgColor: "rgba(17, 17, 17, 0.05)",
        myBorder: "1px",
        cardColor: "rgba(17, 17, 17, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};

