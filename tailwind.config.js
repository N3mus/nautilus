/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--color-blue)",
          green: "var(--color-green)",
          gray: "var(--color-gray)",
          red: "var(--color-red)",
        },
      },
      backgroundImage: {},
      boxShadow: {
        "button-active": "0px 8px 8px 0px rgba(var(--color-blue), 0.64) inset",
        "primary-button-hover": "0px 0px 16px 0px var(--color-blue)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover", "focus"],
    },
  },
};
