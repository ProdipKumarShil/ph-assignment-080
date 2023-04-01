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
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

