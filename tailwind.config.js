/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
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
          blue: "var(--color-blue)",
          green: "var(--color-green)",
          gray: "var(--color-gray)",
          red: "var(--color-red)",
        },
      },
      backgroundImage: {
        "radial-top":
          "radial-gradient(100% 100% at 50% 0%, #32FF5F 0%, #32C0FE 100%)",
        "radial-top-disabled":
          "radial-gradient(100% 100% at 50% 0%, rgba(50, 255, 95, 0.25) 0%, rgba(50, 192, 254, 0.25) 100%)",
      },
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
