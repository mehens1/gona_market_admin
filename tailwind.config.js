/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#EEFDF6",
          100: "#E6F7EC",
          200: "#D9F1DE",
          300: "#CFEFD6",
          400: "#BFEED0",
          500: "#CFEED6", // used as light panel background
        },
        brand: {
          50: "#E9FBEF",
          100: "#D7F8E0",
          300: "#8EDD9E",
          500: "#34D399",
        },
        ui: {
          soft: "#F6F9FB",
        },
      },
      boxShadow: {
        card: "0 6px 18px rgba(17,24,39,0.06)",
        panel: "0 10px 30px rgba(16,24,40,0.06)",
      },
      borderRadius: {
        "xl-2": "18px",
      },
    },
  },
  plugins: [],
};
