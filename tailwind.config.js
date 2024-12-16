/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sora: ["Sora", "Helvetica", "sans-serif"],
    },
    extend: {
      fontSize: {
        "3.5xl": [
          "2rem",
          {
            lineHeight: "2.52rem",
            letterSpacing: "0.013rem",
          },
        ],
      },
      colors: {
        brand: {
          blue: "rgb(var(--color-blue))",
          green: "rgb(var(--color-green))",
          gray: "rgb(var(--color-gray))",
          red: "rgb(var(--color-red))",
        },
      },
      backgroundImage: {
        "radial-top":
          "radial-gradient(100% 100% at 50% 0%, #32FF5F 0%, #32C0FE 100%)",
        "radial-top-disabled":
          "radial-gradient(100% 100% at 50% 0%, rgba(50, 255, 95, 0.25) 0%, rgba(50, 192, 254, 0.25) 100%)",
      },
      boxShadow: {
        "button-bright-active":
          "0px 8px 8px 0px rgba(var(--color-blue), 0.64) inset",
        "button-bright-hover": "0px 0px 16px 0px rgb(var(--color-blue))",
        "button-dark-active": "0px 4px 4px 0px #00000040 inset",
        "button-dark-hover": [
          "0px 0px 0px 1px rgba(0, 0, 0, 0.25)",
          "0px 1px 1px 0px rgba(0, 0, 0, 0.25)",
          "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
          "0px 16px 16px 0px rgba(0, 0, 0, 0.25)",
        ],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      boxShadow: ["hover", "focus"],
    },
  },
};
