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
          "0%": { transform: "scale(5)" },
          "25%": { transform: "scale(0)" },
          "50%": { transform: "scale(4)" },
          "75%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        wiggleX: {
          "0%": { transform: "scale(2)" },
          "25%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.5)" },
          "75%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

