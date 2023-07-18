module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "800px",
        lg: "1200px",
      },
    },
    extend: {
      animation: {
        moveInLeft: "moveInLeft 0.5s ease-in",
        moveInRight: "moveInRight 0.5s ease-in",
        wiggle: "wiggle 2.75s infinite",
      },
      keyframes: {
        moveInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        moveInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        wiggle: {
          "0%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(-5deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
